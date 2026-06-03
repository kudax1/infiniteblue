import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Infinite Blue transformed our legacy systems into a modern, scalable platform. Their engineering rigour and commitment to uptime has been exceptional.",
            name: "Sarah M.",
            client: "Rand Water",
            role: "Head of IT",
            initials: "SM"
        },
        {
            quote: "Working with Infinite Blue felt like having a senior tech team in-house. They delivered our marketing platform on time and exceeded every expectation.",
            name: "David T.",
            client: "Plinth",
            role: "Managing Director",
            initials: "DT"
        },
        {
            quote: "From architecture to deployment, Infinite Blue brought a level of professionalism and technical depth that's rare to find. They're our go-to technology partner.",
            name: "Elena R.",
            client: "Alsitype",
            role: "Operations Director",
            initials: "ER"
        }
    ];

    return (
        <section className="section" style={{ background: '#f6f9fc' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 64px' }}>
                    <h2>What our clients say</h2>
                    <p>Don't just take our word for it. Here's what engineering and business leaders have to say about partnering with us.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <Quote color="rgba(99, 91, 255, 0.2)" size={32} style={{ marginBottom: '16px' }} />
                            <p className="testimonial-quote">"{t.quote}"</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">
                                    {t.initials}
                                </div>
                                <div className="testimonial-info">
                                    <h4>{t.name}</h4>
                                    <p>{t.role}, {t.client}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
