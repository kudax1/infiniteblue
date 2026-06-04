import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for InfiniteBlue Software Agency',
  alternates: { canonical: 'https://infiniteblue.africa/terms' },
};

export default function TermsPage() {
  return (
    <section className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '24px' }}>Terms of Service</h1>
        <div style={{ color: 'var(--color-text-main)', fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p>Last updated: 4 June 2026</p>
          
          <h2>1. Agreement to Terms</h2>
          <p>These Terms of Service constitute a legally binding agreement made between you and InfiniteBlue, concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
          
          <h2>2. Intellectual Property Rights</h2>
          <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.</p>
          
          <h2>3. User Representations</h2>
          <p>By using the Site, you represent and warrant that:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You are not a minor in the jurisdiction in which you reside.</li>
            <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
          </ul>

          <h2>4. Prohibited Activities</h2>
          <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
          
          <h2>5. Contact Us</h2>
          <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at info@infinitebluelabs.com.</p>
        </div>
      </div>
    </section>
  );
}
