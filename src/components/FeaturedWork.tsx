import Image from 'next/image';
import { ArrowRight, Smartphone, Globe } from 'lucide-react';

const FeaturedWork = () => {
    const projects = [
        {
            title: "Instabook AI Receptionist",
            category: "AI Integration & Web App",
            description: "A smart, conversational AI agent for automated bookings and customer service. Built to reduce administrative overhead and improve client response times.",
            image: "/instabook.png",
            links: [
                {
                    label: "View Live Agent",
                    url: "https://instabookagent.com/",
                    primary: true,
                    icon: <Globe size={16} />
                }
            ]
        },
        {
            title: "MSM Property Fund",
            category: "Native Mobile App",
            description: "A secure, high-performance mobile application for property investors to manage portfolios, track growth, and explore premium real estate on the go.",
            image: "/msm-featured.png",
            links: [
                {
                    label: "View Platform",
                    url: "https://msmproperty.co.za/app/",
                    primary: true,
                    icon: <Globe size={16} />
                }
            ]
        },
        {
            title: "Plinth Commercial Real Estate",
            category: "Property Management SaaS",
            description: "Institutional-grade underwriting, capital stack modelling, and due diligence tools purpose-built for commercial property professionals.",
            image: "/plinth-featured.png",
            links: [
                {
                    label: "View Platform",
                    url: "https://plinth-marketing-dev-sjm37owltq-bq.a.run.app",
                    primary: true,
                    icon: <Globe size={16} />
                }
            ]
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <h2>Featured Work</h2>
                    <p>
                        A selection of our recent projects. We build scalable digital products that deliver real business value.
                    </p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, idx) => (
                        <div key={idx} className="portfolio-card">
                            <div className="portfolio-image-wrapper">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill 
                                    className="portfolio-image"
                                />
                            </div>
                            <div className="portfolio-content">
                                <span className="portfolio-category">{project.category}</span>
                                <h3 className="portfolio-title">{project.title}</h3>
                                <p className="portfolio-desc">{project.description}</p>
                                
                                <div className="portfolio-actions">
                                    {project.links.map((link, i) => (
                                        <a 
                                            key={i} 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className={`btn ${link.primary ? '' : 'btn-secondary'}`}
                                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                                        >
                                            {link.icon} {link.label} {link.primary && <ArrowRight size={16} />}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
