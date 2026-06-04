import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plinth Case Study',
  description: 'How we helped Plinth Property Technologies replace fragmented spreadsheets with a unified platform — cutting underwriting time and reducing deal-cycle risk.',
  alternates: { canonical: 'https://infiniteblue.africa/work/plinth' },
};

export default function PlinthCaseStudy() {
  return (
    <>
      <section className="case-hero">
        <div className="container">
          <div className="case-hero-content">
            <h1 className="case-title">The foundation beneath every great deal.</h1>
            <p className="case-subtitle">
              Replacing fragmented spreadsheets with a single platform that gives commercial property professionals confidence in every underwriting decision.
            </p>
          </div>
          <div className="case-hero-image">
            <Image 
              src="/plinth-featured.png" 
              alt="Plinth Property Technologies Platform" 
              width={1200} 
              height={800} 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
              priority
            />
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 100px 0', background: 'white' }}>
        <div className="container">
          <div className="case-grid">
            <div className="case-grid-item">
              <h4>Client</h4>
              <p>Plinth Property Technologies</p>
            </div>
            <div className="case-grid-item">
              <h4>Industry</h4>
              <p>PropTech / Commercial Real Estate</p>
            </div>
            <div className="case-grid-item">
              <h4>Services</h4>
              <p>Product Strategy, Full-Stack Engineering, Cloud Infrastructure</p>
            </div>
            <div className="case-grid-item">
              <h4>Timeline</h4>
              <p>2026 – Present</p>
            </div>
          </div>

          <div className="case-section">
            <h2>The Problem</h2>
            <p>
              Commercial property underwriting in South Africa still runs on fragmented spreadsheets, emailed between analysts, fund managers, and lawyers. Capital stack models live in one file, due diligence checklists in another, and deal assumptions in someone&apos;s head.
            </p>
            <p>
              For institutional investors and developers, this fragmentation creates real cost: deals take longer to close, errors slip through during due diligence, and teams waste hours reconciling numbers across disconnected documents. When a single miscalculation can mean millions in mispriced risk, the spreadsheet-and-email approach is no longer good enough.
            </p>
            <p>
              Plinth&apos;s founder saw an opportunity to build the system the industry had been duct-taping together manually — a single platform where underwriting, capital stack modelling, and due diligence happen in one place, with institutional-grade accuracy and proper access controls.
            </p>
          </div>

          <div className="case-section">
            <h2>What We Delivered</h2>
            <p>
              We partnered with Plinth from day one — product strategy through to production deployment — to build a platform purpose-fit for how commercial property professionals actually work:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px', marginBottom: '24px' }}>
              <li><strong>Unified underwriting workspace</strong> — analysts model deals in one environment instead of juggling spreadsheets. Assumptions, cash flows, and capital structures update in real time.</li>
              <li><strong>Institutional-grade financial engine</strong> — purpose-built calculation layer with the mathematical precision required for commercial lending and fund management. No rounding errors, no broken formulas.</li>
              <li><strong>Role-based collaboration</strong> — fund managers, analysts, and external advisors each see exactly what they need. Sensitive deal data stays compartmentalised.</li>
              <li><strong>Audit trail and version control</strong> — every assumption change is tracked, so teams can see who changed what and when — critical for compliance and investor reporting.</li>
              <li><strong>Cloud-native from the start</strong> — the platform scales automatically, data is encrypted at rest and in transit, and the infrastructure is hosted in South Africa for data sovereignty.</li>
            </ul>
          </div>

          <div className="case-section">
            <h2>The Outcome</h2>
            <p>
              Plinth now provides commercial property professionals with a tool that replaces the spreadsheet chaos they&apos;ve tolerated for decades. Early users report significantly faster deal modelling, fewer errors caught late in due diligence, and better visibility for fund managers across their deal pipeline.
            </p>
            <p>
              For the Plinth team, our engagement meant they could go from concept to a production-ready SaaS platform without hiring a full in-house engineering team upfront — reducing their burn rate while accelerating their go-to-market timeline.
            </p>
          </div>

          <div className="case-section">
            <h2>How We Built It</h2>
            <p>
              For those interested in the technical approach: the platform runs on Google Cloud (hosted in africa-south1 for local data residency), with a React/Next.js frontend and a Python backend handling the computationally intensive financial modelling. Infrastructure is defined as code and deployments are fully automated — meaning Plinth ships updates confidently without downtime.
            </p>
            
            <div className="case-tech-stack">
              <span className="tech-pill">Next.js</span>
              <span className="tech-pill">TypeScript</span>
              <span className="tech-pill">Python</span>
              <span className="tech-pill">FastAPI</span>
              <span className="tech-pill">PostgreSQL</span>
              <span className="tech-pill">Terraform</span>
              <span className="tech-pill">Google Cloud</span>
            </div>
          </div>

          <div className="case-section" style={{ textAlign: 'center', marginTop: '100px', paddingTop: '64px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '16px' }}>Have a similar challenge?</h2>
            <p style={{ marginBottom: '32px' }}>We help teams turn complex domain problems into focused, reliable software. Let&apos;s talk about yours.</p>
            <Link href="/contact" className="btn">Start a Conversation &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
