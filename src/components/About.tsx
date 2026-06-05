import { Code, Globe, Target } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--color-surface)' }}>
            <div className="container">
                <div style={{ display: 'grid', gap: '64px', alignItems: 'center' }} className="hero-container">

                    <div>
                        <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: 'var(--font-sm, 14px)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                            Our Company
                        </div>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', letterSpacing: '-1px', marginBottom: '24px' }}>
                            Building the digital infrastructure of tomorrow.
                        </h2>
                        <p style={{ fontSize: 'var(--font-lg, 18px)', color: 'var(--color-text-main)', marginBottom: '24px' }}>
                            At InfiniteBlue, we are a collective of elite software engineers, cloud architects, and product designers dedicated to solving complex business challenges through elegant technology.
                        </p>
                        <p style={{ fontSize: 'var(--font-lg, 18px)', color: 'var(--color-text-main)', marginBottom: '40px' }}>
                            Founded on the principle of engineering excellence, we partner with visionary companies—from innovative startups to global enterprises—to build scalable, resilient, and secure applications. Our mission is to transform ambitious ideas into robust technical reality.
                        </p>

                        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                            <div>
                                <div style={{ fontSize: 'var(--font-h3, 32px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>99.9%</div>
                                <div style={{ fontSize: 'var(--font-sm, 14px)', color: 'var(--color-text-main)', fontWeight: 500 }}>Uptime SLA</div>
                            </div>
                            <div>
                                <div style={{ fontSize: 'var(--font-h3, 32px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>24/7</div>
                                <div style={{ fontSize: 'var(--font-sm, 14px)', color: 'var(--color-text-main)', fontWeight: 500 }}>Technical Support</div>
                            </div>
                            <div>
                                <div style={{ fontSize: 'var(--font-h3, 32px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>Global</div>
                                <div style={{ fontSize: 'var(--font-sm, 14px)', color: 'var(--color-text-main)', fontWeight: 500 }}>Client Reach</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="bento-item" style={{ padding: '32px', background: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                <Target color="var(--color-accent)" size={24} />
                                <h3 style={{ fontSize: 'var(--font-h4, 20px)', margin: 0 }}>Mission Driven</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-main)', margin: 0, fontSize: 'var(--font-md, 15px)' }}>
                                We don&apos;t focus on outputs; we focus on business outcomes. We measure our success by the growth and efficiency we unlock for our clients.
                            </p>
                        </div>

                        <div className="bento-item" style={{ padding: '32px', background: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                <Code color="var(--color-accent)" size={24} />
                                <h3 style={{ fontSize: 'var(--font-h4, 20px)', margin: 0 }}>Craftsmanship</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-main)', margin: 0, fontSize: 'var(--font-md, 15px)' }}>
                                Writing code is easy. Architecting systems that scale gracefully requires deep expertise, discipline, and a passion for the craft.
                            </p>
                        </div>

                        <div className="bento-item" style={{ padding: '32px', background: 'var(--color-primary)', color: 'white' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                <Globe color="#ffffff" size={24} />
                                <h3 style={{ fontSize: 'var(--font-h4, 20px)', margin: 0, color: 'white' }}>Global Standards</h3>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: 'var(--font-md, 15px)' }}>
                                We leverage world-class, battle-tested technologies. We bring Silicon Valley engineering standards to every project we undertake.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
