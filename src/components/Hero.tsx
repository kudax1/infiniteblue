import { ArrowRight, Cpu, Cloud, Smartphone, Monitor, Database, Braces, CheckCircle, Shield, Zap } from 'lucide-react';
import './HeroGraphic.css';
const ICON_SM = 16;
const ICON_MD = 18;

const Hero = () => {
    return (
        <section className="hero dark-hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>
                        We build intelligent{' '}
                        <span className="text-gradient-blue">digital products that scale.</span>
                    </h1>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        We co-create exceptional web, iOS, Android, and Harmony OS applications. We build resilient cloud infrastructure and integrate cutting-edge AI to drive your business forward.
                    </p>
                    <div className="hero-actions">
                        <a href="/contact" className="btn btn-glow">
                            Start building <ArrowRight size={ICON_MD} />
                        </a>
                        <a href="#services" className="btn btn-secondary-dark">
                            Explore services
                        </a>
                    </div>
                </div>

                <div className="hero-graphic-container">
                    <div className="command-center">
                        {/* Background Grid & Infinity Path */}
                        <div className="grid-bg"></div>
                        <svg className="infinity-path" viewBox="0 0 500 200">
                            <path d="M250,100 C150,-50 0,50 100,150 C200,250 300,-50 400,50 C500,150 350,250 250,100 Z" fill="none" stroke="rgba(0, 242, 254, 0.1)" strokeWidth="4" />
                            <path className="animated-path" d="M250,100 C150,-50 0,50 100,150 C200,250 300,-50 400,50 C500,150 350,250 250,100 Z" fill="none" stroke="#00f2fe" strokeWidth="2" strokeDasharray="100 900" />
                        </svg>

                        {/* Connection Lines */}
                        <svg className="connection-lines" viewBox="0 0 400 400">
                            <line x1="200" y1="200" x2="80" y2="100" />
                            <line x1="200" y1="200" x2="320" y2="100" />
                            <line x1="200" y1="200" x2="80" y2="300" />
                            <line x1="200" y1="200" x2="320" y2="300" />
                            <line x1="200" y1="200" x2="200" y2="60" />
                            <line x1="200" y1="200" x2="200" y2="340" />
                        </svg>

                        {/* Central Core */}
                        <div className="core-hub">
                            <div className="core-pulse"></div>
                            <span>InfiniteBlue Core</span>
                        </div>

                        {/* Connected Cards */}
                        <div className="conn-card card-ai">
                            <Cpu size={ICON_SM} className="card-icon" />
                            <span>AI Models</span>
                        </div>
                        <div className="conn-card card-cloud">
                            <Cloud size={ICON_SM} className="card-icon" />
                            <span>Cloud</span>
                        </div>
                        <div className="conn-card card-mobile">
                            <Smartphone size={ICON_SM} className="card-icon" />
                            <span>Mobile</span>
                        </div>
                        <div className="conn-card card-web">
                            <Monitor size={ICON_SM} className="card-icon" />
                            <span>Web App</span>
                        </div>
                        <div className="conn-card card-api">
                            <Braces size={ICON_SM} className="card-icon" />
                            <span>APIs</span>
                        </div>
                        <div className="conn-card card-data">
                            <Database size={ICON_SM} className="card-icon" />
                            <span>Data</span>
                        </div>

                        {/* Status Badges */}
                        <div className="status-badge badge-secure">
                            <Shield size={12} color="#00f2fe" /> Secure
                        </div>
                        <div className="status-badge badge-scalable">
                            <Zap size={12} color="#00f2fe" /> Scalable
                        </div>
                        <div className="status-badge badge-automated">
                            <CheckCircle size={12} color="#00f2fe" /> Automated
                        </div>

                        {/* Floating Particles */}
                        <div className="particle p-1"></div>
                        <div className="particle p-2"></div>
                        <div className="particle p-3"></div>
                        <div className="particle p-4"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
