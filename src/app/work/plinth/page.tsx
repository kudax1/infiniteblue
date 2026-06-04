import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plinth Case Study | InfiniteBlue',
  description: 'How we built an institutional-grade underwriting and capital stack modelling platform for South African commercial property professionals.',
};

export default function PlinthCaseStudy() {
  return (
    <main>
      <section className="case-hero">
        <div className="container">
          <div className="case-hero-content">
            <h1 className="case-title">The foundation beneath every great deal.</h1>
            <p className="case-subtitle">
              Building an institutional-grade underwriting and due diligence platform for commercial property professionals.
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
              <p>Full-Stack Engineering, Cloud Architecture</p>
            </div>
            <div className="case-grid-item">
              <h4>Timeline</h4>
              <p>2026-Present</p>
            </div>
          </div>

          <div className="case-section">
            <h2>The Challenge</h2>
            <p>
              Commercial property underwriting in South Africa has traditionally relied on fragmented spreadsheets, siloed data, and manual capital stack modelling. This fragmentation creates significant risk during due diligence and slows down the transaction pipeline for institutional investors and developers.
            </p>
            <p>
              Plinth required a unified platform that could handle institutional-grade financial modelling while providing an intuitive, seamless experience for property professionals. The system needed absolute mathematical precision, robust role-based access control, and the ability to scale securely in the cloud.
            </p>
          </div>

          <div className="case-section">
            <h2>The Technical Solution</h2>
            <p>
              We architected Plinth as a modern, high-performance monorepo utilizing <strong>pnpm workspaces</strong> and <strong>Turborepo</strong>. This approach allowed us to manage a SaaS application, an internal administration dashboard, and a public marketing site from a single repository while sharing a custom React design system (`packages/ui`).
            </p>
            <p>
              For the frontend engine, we selected <strong>Next.js (React)</strong> and <strong>TypeScript</strong>, delivering a type-safe, blazing-fast user experience. 
            </p>
            <p>
              The core financial modelling requires intensive computation. To handle this, we decoupled the business logic into a <strong>Python FastAPI</strong> backend. Python&apos;s data science ecosystem makes it the ideal choice for capital stack calculations and underwriting logic. The data is securely persisted in a <strong>Google Cloud SQL (PostgreSQL)</strong> database.
            </p>
          </div>

          <div className="case-section">
            <h2>Enterprise Infrastructure</h2>
            <p>
              Security and reliability were non-negotiable. The entire infrastructure is defined as code using <strong>Terraform</strong> and deployed on <strong>Google Cloud Platform (GCP)</strong>. Both the Next.js frontends and the FastAPI backend are containerized via Docker and orchestrated on <strong>Cloud Run (africa-south1)</strong>, ensuring automatic scaling and high availability.
            </p>
            <p>
              Authentication is securely handled by <strong>Firebase Auth</strong>, and the entire deployment pipeline is fully automated via <strong>GitHub Actions</strong> CI/CD.
            </p>
            
            <div className="case-tech-stack">
              <span className="tech-pill">Next.js</span>
              <span className="tech-pill">TypeScript</span>
              <span className="tech-pill">Python</span>
              <span className="tech-pill">FastAPI</span>
              <span className="tech-pill">Turborepo</span>
              <span className="tech-pill">PostgreSQL</span>
              <span className="tech-pill">Terraform</span>
              <span className="tech-pill">Google Cloud Run</span>
            </div>
          </div>

          <div className="case-section" style={{ textAlign: 'center', marginTop: '100px', paddingTop: '64px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '16px' }}>Ready to build your enterprise platform?</h2>
            <p style={{ marginBottom: '32px' }}>We partner with ambitious teams to build the infrastructure of tomorrow.</p>
            <Link href="/contact" className="btn">Start a Project &rarr;</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
