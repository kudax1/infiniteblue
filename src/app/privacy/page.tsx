import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for InfiniteBlue Software Agency – compliant with the Protection of Personal Information Act (POPIA).',
  alternates: { canonical: 'https://infiniteblue.africa/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '24px' }}>Privacy Policy</h1>
        <div style={{ color: 'var(--color-text-main)', fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p>Last updated: 4 June 2026</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to InfiniteBlue (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information in accordance with the Protection of Personal Information Act, 2013 (POPIA) and other applicable data protection legislation. This policy explains how we collect, use, store, and safeguard your personal information when you visit our website or engage our services.
          </p>

          <h2>2. Responsible Party</h2>
          <p>
            For the purposes of POPIA, the responsible party is:<br />
            <strong>InfiniteBlue</strong><br />
            Email: info@infinitebluelabs.com<br />
            Website: https://infiniteblue.africa
          </p>

          <h2>3. Personal Information We Collect</h2>
          <p>We may collect and process the following categories of personal information:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Identity Information</strong> – first name, last name, or similar identifiers.</li>
            <li><strong>Contact Information</strong> – email address, telephone number, and company name.</li>
            <li><strong>Technical Information</strong> – IP address, browser type and version, time zone, operating system, and device information collected via cookies and analytics tools.</li>
            <li><strong>Usage Information</strong> – information about how you interact with our website, including pages visited and referral sources.</li>
            <li><strong>Communication Information</strong> – any information you provide when you contact us through our forms or email.</li>
          </ul>

          <h2>4. Purpose of Processing</h2>
          <p>We process your personal information only for the following lawful purposes:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>To respond to enquiries and provide the services you have requested.</li>
            <li>To send project-related communications when you engage us for work.</li>
            <li>To improve our website, services, and user experience.</li>
            <li>To comply with legal obligations.</li>
            <li>To protect the legitimate interests of our business, provided your rights are not overridden.</li>
          </ul>

          <h2>5. Lawful Basis for Processing</h2>
          <p>Under POPIA, we rely on the following conditions for lawful processing:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Consent</strong> – where you have voluntarily provided information (e.g., submitting our contact form or accepting cookies).</li>
            <li><strong>Contract</strong> – where processing is necessary to perform a contract with you or to take steps at your request before entering into a contract.</li>
            <li><strong>Legitimate interest</strong> – where processing is necessary for our legitimate business interests, such as improving our services, provided this does not prejudice your rights.</li>
            <li><strong>Legal obligation</strong> – where we are required to process your information by law.</li>
          </ul>

          <h2>6. Cookies and Analytics</h2>
          <p>
            Our website uses cookies and Firebase Analytics to understand how visitors interact with our site. Analytics are only activated after you provide explicit consent via our cookie banner. You may withdraw consent at any time by clearing your browser cookies or contacting us.
          </p>
          <p>
            We also use Google reCAPTCHA to protect our forms from abuse. This service may collect technical data in accordance with Google&apos;s privacy policy.
          </p>

          <h2>7. Data Sharing and Third Parties</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Service providers</strong> – such as Google (Firebase, reCAPTCHA) and email delivery services, solely to provide our services.</li>
            <li><strong>Legal authorities</strong> – where required by law or to protect our rights.</li>
          </ul>
          <p>
            Where personal information is transferred outside of South Africa, we ensure appropriate safeguards are in place as required by POPIA Section 72.
          </p>

          <h2>8. Data Retention</h2>
          <p>
            We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are retained for a maximum of 24 months, after which they are securely deleted.
          </p>

          <h2>9. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, destruction, or damage. These measures include encryption in transit (TLS), secure cloud hosting, and access controls limited to authorised personnel.
          </p>

          <h2>10. Your Rights Under POPIA</h2>
          <p>As a data subject, you have the right to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Access</strong> – request confirmation of whether we hold your personal information and request a copy.</li>
            <li><strong>Correction</strong> – request that inaccurate or incomplete information be corrected.</li>
            <li><strong>Deletion</strong> – request the deletion of your personal information where it is no longer necessary.</li>
            <li><strong>Object</strong> – object to the processing of your personal information on reasonable grounds.</li>
            <li><strong>Withdraw consent</strong> – where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
            <li><strong>Lodge a complaint</strong> – submit a complaint to the Information Regulator of South Africa if you believe your rights have been infringed.</li>
          </ul>

          <h2>11. Information Regulator</h2>
          <p>
            If you are not satisfied with how we handle your personal information, you have the right to lodge a complaint with:<br />
            <strong>The Information Regulator (South Africa)</strong><br />
            Website: https://inforegulator.org.za<br />
            Email: enquiries@inforegulator.org.za
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this page periodically.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about this privacy policy, wish to exercise your rights, or want to make a complaint, please contact us at:<br />
            <strong>Email:</strong> info@infinitebluelabs.com
          </p>
        </div>
      </div>
    </section>
  );
}
