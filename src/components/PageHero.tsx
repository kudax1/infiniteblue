import React from 'react';

interface PageHeroProps {
  title: string;
  description: string;
  pattern?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ title, description, pattern = true }) => {
  return (
    <section className="page-hero">
      {pattern && (
        <div className="page-hero-pattern">
          <div className="pattern-grid"></div>
        </div>
      )}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default PageHero;
