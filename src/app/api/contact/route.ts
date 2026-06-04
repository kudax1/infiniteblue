import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, company, services, description, recaptchaToken, honeypot } = body;

        // 1. Check honeypot (bots will fill this hidden field)
        if (honeypot) {
            console.log("Honeypot filled. Rejecting as bot.");
            return NextResponse.json({ success: false, error: 'Spam detected' }, { status: 400 });
        }

        // 2. Verify reCAPTCHA v3 token
        if (!recaptchaToken) {
            return NextResponse.json({ success: false, error: 'Missing reCAPTCHA token' }, { status: 400 });
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (secretKey) {
            const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
            const verifyRes = await fetch(verifyUrl, { method: 'POST' });
            const verifyData = await verifyRes.json();
            
            if (!verifyData.success || verifyData.score < 0.5) {
                console.log("reCAPTCHA failed or score too low:", verifyData);
                return NextResponse.json({ success: false, error: 'reCAPTCHA verification failed' }, { status: 400 });
            }
        } else {
            console.warn("No RECAPTCHA_SECRET_KEY provided, skipping verification for local dev");
        }

        // 3. Configure Nodemailer
        const user = process.env.GMAIL_USER;
        const pass = process.env.GMAIL_APP_PASSWORD;

        if (!user || !pass) {
            console.error("Missing Gmail credentials");
            return NextResponse.json({ success: false, error: 'Server misconfiguration' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user, pass }
        });

        // 4. Construct Email
        const mailOptions = {
            from: `"InfiniteBlue Website" <${user}>`,
            to: user, // Send to yourself
            replyTo: email,
            subject: `New Lead: ${firstName} ${lastName} ${company ? `(${company})` : ''}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Services:</strong> ${services?.join(', ') || 'N/A'}</p>
                <h3>Project Description:</h3>
                <p>${description?.replace(/\n/g, '<br>') || 'N/A'}</p>
            `
        };

        // 5. Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
