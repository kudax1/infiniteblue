const ClientLogos = () => {
    // We use a double list to create a seamless infinite scrolling effect
    const clients = [
        { name: "Instabook AI", url: "#", logo: "/instabook-logo.png" },
        { name: "MSM Property", displayText: "Property", url: "https://msmproperties.co.za/", logo: "/msm-logo.png" },
        { name: "Plinth", url: "https://plinth-marketing-dev-sjm37owltq-bq.a.run.app/" },
        { name: "Lidwala", url: "https://www.lidwala.com", logo: "/lidwala-logo.png" },
        { name: "Rand Water", url: "https://www.randwater.co.za", logo: "/randwater-logo.png", invert: true },
        { name: "Alsitype", url: "https://www.alsitype.com", logo: "/alsitype-logo.png" }
    ];

    return (
        <section className="client-logos-section">
            <div className="container" style={{ maxWidth: '100%' }}>
                <h3 className="client-logos-title">Trusted by industry leaders</h3>
                
                <div className="marquee-wrapper">
                    {/* First instance of the list */}
                    <div className="marquee">
                        {clients.map((client, index) => (
                            <a href={client.url} target="_blank" rel="noopener noreferrer" key={`client-1-${index}`} className="client-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                {client.logo && <img src={client.logo} alt={`${client.name} logo`} style={{ height: '32px', objectFit: 'contain', filter: client.invert ? 'invert(1) brightness(0)' : 'none' }} />}
                                <span>{client.displayText !== undefined ? client.displayText : client.name}</span>
                            </a>
                        ))}
                    </div>
                    {/* Second instance for seamless loop */}
                    <div className="marquee" aria-hidden="true">
                        {clients.map((client, index) => (
                            <a href={client.url} target="_blank" rel="noopener noreferrer" key={`client-2-${index}`} className="client-logo" style={{ textDecoration: 'none', cursor: client.url === '#' ? 'default' : 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                {client.logo && <img src={client.logo} alt={`${client.name} logo`} style={{ height: '32px', objectFit: 'contain', filter: client.invert ? 'invert(1) brightness(0)' : 'none' }} />}
                                <span>{client.displayText !== undefined ? client.displayText : client.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
