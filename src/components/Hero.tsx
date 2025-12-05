// src/components/Hero.tsx
const Hero = () => {
  return (
    <section id="accueil" className="hero-section">
      <div className="hero-content">
        <h1>Hadil BEN SOUSSIA</h1>
        <h2>Étudiante Ingénieure | Majeure **IA & Big Data**</h2>
        <p className="date">Portfolio 2024-2025</p>

        <p className="slogan">
          *"Transformer la donnée brute en solutions intelligentes et humaines, de la conception (Figma) à l'implémentation (Python)."*
        </p>

        <div className="cta-buttons">
          <a href="#projets" className="btn-primary">Découvrir mes Projets</a>
          <a href="https://linkedin.com/in/hadil-ben-soussia-421178274" target="_blank" className="btn-secondary">Mon Profil LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;