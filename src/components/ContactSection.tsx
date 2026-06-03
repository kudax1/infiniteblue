"use client";
import { useState } from 'react';
import { Mail, Linkedin, CheckCircle2, Loader2, MessageSquare } from 'lucide-react';

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset form after a few seconds
            setTimeout(() => {
                setIsSuccess(false);
                (e.target as HTMLFormElement).reset();
            }, 5000);
        }, 1500);
    };

    return (
        <section className="contact-section">
            <div className="container">
                <div style={{ marginBottom: '64px', maxWidth: '600px' }}>
                    <h1 style={{ fontSize: '48px', letterSpacing: '-1px', marginBottom: '16px' }}>Let's talk about your project</h1>
                    <p style={{ fontSize: '20px', color: 'var(--color-text-main)' }}>
                        Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Left Column: Form */}
                    <div className="contact-form-card">
                        {isSuccess ? (
                            <div style={{ textAlign: 'center', padding: '64px 0', animation: 'ha_fadeIn 0.5s ease' }}>
                                <CheckCircle2 size={64} color="#00d084" style={{ margin: '0 auto 24px' }} />
                                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Message received!</h3>
                                <p style={{ color: 'var(--color-text-main)', fontSize: '16px' }}>
                                    Thank you for reaching out. A member of our team will be in touch shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="firstName">First Name *</label>
                                        <input type="text" id="firstName" name="firstName" className="form-input" required placeholder="Jane" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="lastName">Last Name *</label>
                                        <input type="text" id="lastName" name="lastName" className="form-input" required placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">Work Email *</label>
                                        <input type="email" id="email" name="email" className="form-input" required placeholder="jane@company.com" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" className="form-input" placeholder="+27 00 000 0000" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" className="form-input" placeholder="Your Company Ltd" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Services of Interest</label>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="services" value="Web App" />
                                            Full-Stack Web App
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="services" value="Mobile App" />
                                            Mobile / Harmony OS App
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="services" value="Cloud" />
                                            Cloud Architecture
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="services" value="AI" />
                                            AI Integration
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="services" value="Audit" />
                                            Code Audit / Rescue
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="services" value="Other" />
                                            Other
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="description">Project Description</label>
                                    <textarea id="description" name="description" className="form-textarea" placeholder="Tell us a bit about what you're looking to build..."></textarea>
                                </div>

                                <div className="form-group" style={{ marginBottom: '32px' }}>
                                    <label className="checkbox-label" style={{ fontSize: '13px', color: 'var(--color-text-main)' }}>
                                        <input type="checkbox" required />
                                        I agree to the processing of my personal data in accordance with the Privacy Policy.
                                    </label>
                                </div>

                                <button type="submit" className="btn" style={{ width: '100%', padding: '14px', fontSize: '16px' }} disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                                <style dangerouslySetInnerHTML={{__html: `
                                    @keyframes spin { 100% { transform: rotate(360deg); } }
                                `}} />
                            </form>
                        )}
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="contact-info-wrapper">
                        <div className="contact-info-card">
                            <div className="contact-method">
                                <div className="contact-method-icon">
                                    <MessageSquare size={20} />
                                </div>
                                <div>
                                    <h4>Prefer a conversation?</h4>
                                    <p>Drop us an email and we'll get back to you within 24 hours.</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info-card" style={{ background: 'var(--color-primary)', color: 'white' }}>
                            <div className="contact-method" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                                <div>
                                    <h4 style={{ color: 'white', fontSize: '18px', marginBottom: '16px' }}>Why Partner with Us?</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                            <CheckCircle2 size={18} color="#00d084" style={{ marginTop: '2px', flexShrink: 0 }} />
                                            <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}>Enterprise-grade security and scalable architecture</span>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                            <CheckCircle2 size={18} color="#00d084" style={{ marginTop: '2px', flexShrink: 0 }} />
                                            <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}>Dedicated senior engineering teams</span>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                            <CheckCircle2 size={18} color="#00d084" style={{ marginTop: '2px', flexShrink: 0 }} />
                                            <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}>Fast-paced execution with rigorous QA</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="contact-method">
                                <div className="contact-method-icon">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4>Email Us</h4>
                                    <a href="mailto:info@infiniteblue.africa">info@infiniteblue.africa</a>
                                </div>
                            </div>
                            <div className="contact-method">
                                <div className="contact-method-icon">
                                    <Linkedin size={20} />
                                </div>
                                <div>
                                    <h4>Connect on LinkedIn</h4>
                                    <a href="https://linkedin.com/company/infinite-blue-placeholder" target="_blank" rel="noopener noreferrer">
                                        Infinite Blue
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
