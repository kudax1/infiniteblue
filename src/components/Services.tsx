import { Globe, Smartphone, Layout, Server, PenTool, Cloud, ShieldCheck, Cpu } from 'lucide-react';

const ICON_SIZE = 24;

const Services = () => {
    const services = [
        {
            title: "Web App Development",
            icon: <Globe size={ICON_SIZE} />,
            description: "High-performance, secure web applications built on modern frameworks. We deliver complex enterprise dashboards, SaaS platforms, and seamless APIs."
        },
        {
            title: "Mobile App Development",
            icon: <Smartphone size={ICON_SIZE} />,
            description: "Exceptional native applications for iOS, Android, and Harmony OS. We create fluid, performant mobile experiences that keep your users engaged."
        },
        {
            title: "Front-End Engineering",
            icon: <Layout size={ICON_SIZE} />,
            description: "Pixel-perfect, responsive interfaces leveraging the latest in React, Next.js, and CSS architectures for optimal user experience and Core Web Vitals."
        },
        {
            title: "Back-End Engineering",
            icon: <Server size={ICON_SIZE} />,
            description: "Scalable microservices and robust API architectures using Node.js, Python, or Go. We focus on security, performance, and data integrity."
        },
        {
            title: "UX/UI Design",
            icon: <PenTool size={ICON_SIZE} />,
            description: "User-centric design processes from wireframing to high-fidelity prototypes, ensuring your product is intuitive, accessible, and visually stunning."
        },
        {
            title: "DevOps & Cloud",
            icon: <Cloud size={ICON_SIZE} />,
            description: "Robust CI/CD pipelines and highly available cloud infrastructure on AWS, Azure, or GCP. We ensure zero-downtime deployments and system resilience."
        },
        {
            title: "Quality Assurance",
            icon: <ShieldCheck size={ICON_SIZE} />,
            description: "Comprehensive automated and manual testing strategies. We catch bugs before they reach production, ensuring your software is reliable and secure."
        },
        {
            title: "AI Integration",
            icon: <Cpu size={ICON_SIZE} />,
            description: "Leverage Large Language Models and Machine Learning to automate processes, enhance decision making, and unlock new insights from your data."
        }
    ];

    return (
        <section id="services" className="section bg-light">
            <div className="container">
                <div className="section-header">
                    <h2>End-to-End Capabilities</h2>
                    <p>
                        From native mobile experiences to highly available cloud architectures,
                        we provide comprehensive software engineering for modern businesses.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, idx) => (
                        <div key={idx} className="bento-item">
                            <div className="bento-icon bento-icon-primary">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p className="mt-auto">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
