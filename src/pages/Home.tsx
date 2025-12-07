import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const baseUrl = import.meta.env.BASE_URL; 

  return (
    <div className="home">
      {/* Hero Section avec photo */}
      <section className="hero fade-in">
        <div className="hero-content">
          {/* Photo de profil */}
          <div className="profile-photo">
            <img 
              src={`${baseUrl}profil.jpg`} 
              alt="Hadil Ben Soussia - Ingénieure en IA et Data Science"
              className="profile-img"
            />
          </div>
          
          {/* Texte d'introduction */}
          <div className="hero-text">
            <h1>Hadil BEN SOUSSIA</h1>
            <p className="subtitle">
              Ingénieure en Intelligence Artificielle & Data Science
            </p>
            <p className="tagline">
              « Comprendre, analyser, innover : créer des solutions utiles grâce à l'IA et au Big Data. »
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn-secondary">Voir mes projets</Link>
              <Link to="/cv" className="btn-secondary">Voir mon CV</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="about slide-up">
        <h2>Mon profil professionnel</h2>
        <p>
          Ingénieure en 4éme année de double diplôme, je combine curiosité intellectuelle et 
          rigueur analytique pour résoudre des problématiques complexes en IA et Data Science. 
          Collaborative et méthodique, je maîtrise la transformation de données en solutions 
          technologiques actionnables.
        </p>
        <p className="stage-info">
          <strong>🎯 Stage recherché :</strong> 4 mois en IA/Big Data<br/>
          <strong>📅 Début :</strong> Avril 2026<br/>
          <strong>✨ Objectif :</strong> Contribuer à des projets innovants à fort impact
        </p>
      </section>
    </div>
  );
}