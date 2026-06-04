import React from 'react';
import { Lightbulb, Code2, Rocket, Headset } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <Lightbulb size={32} color="var(--color-primary)" />,
            title: "1. Discovery & Strategy",
            description: "We dive deep into your business goals, users, and technical constraints to map out a clear roadmap."
        },
        {
            icon: <Code2 size={32} color="var(--color-primary)" />,
            title: "2. Design & Architecture",
            description: "Our architects design scalable cloud infrastructure while our UX team crafts pixel-perfect interfaces."
        },
        {
            icon: <Rocket size={32} color="var(--color-primary)" />,
            title: "3. Agile Development",
            description: "We build in fast, iterative sprints, giving you continuous visibility and testing opportunities."
        },
        {
            icon: <Headset size={32} color="var(--color-primary)" />,
            title: "4. Launch & Scale",
            description: "Post-launch, we provide SLA-backed support, monitor performance, and scale your infrastructure."
        }
    ];

    return (
        <section className="section bg-light" style={{ padding: '80px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>How We Work</h2>
                    <p style={{ color: 'var(--color-text-main)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                        A proven methodology to take your product from concept to production-ready scale.
                    </p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ 
                            background: 'white', 
                            padding: '32px', 
                            borderRadius: '16px', 
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{ 
                                width: '64px', 
                                height: '64px', 
                                borderRadius: '16px', 
                                background: 'rgba(0, 112, 243, 0.1)', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                marginBottom: '24px'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{step.title}</h3>
                            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.6 }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
