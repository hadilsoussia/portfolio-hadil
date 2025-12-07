import "./CapProjet.css";

export default function CapProjet() {
  const baseUrl = import.meta.env.BASE_URL; 

  return (
    <div className="project-page">
      <h2>Application mobile de prévention — Cap Projet</h2>

      <p className="project-intro slide-up">
        Ce projet consiste en la création d’une application mobile de prévention santé,
        basée sur un questionnaire intelligent permettant de générer des recommandations
        personnalisées selon le profil de l’utilisateur.
      </p>

      <h3 className="section-title">Galerie des maquettes</h3>

      <div className="gallery">
        {["cap1.png", "cap2.png", "cap3.png", "cap4.png", "cap5.png", 
          "cap6.png", "cap7.png", "cap8.png", "cap9.png"].map((img, index) => (
          
          <div className="phone-frame fade-in" key={index}>
            <img 
              src={`${baseUrl}${img}`} 
              alt={`Maquette ${index + 1}`} 
              className="gallery-img" 
            />
          </div>
        ))}
      </div>

      <h3 className="section-title">Objectif</h3>
      <p>
        Concevoir une application qui analyse les réponses de l’utilisateur pour fournir
        des recommandations personnalisées visant à améliorer son bien-être et ses habitudes
        de vie.
      </p>

      <h3 className="section-title">Processus</h3>
      <ul>
        <li>Réalisation des maquettes sur Figma</li>
        <li>Conception du questionnaire intelligent</li>
        <li>Structure UX/UI de l’application</li>
        <li>Prototype interactif</li>
      </ul>

      <h3 className="section-title">Résultats</h3>
      <p>
        Un prototype complet et professionnel comprenant 9 écrans principaux avec un
        design moderne, intuitif et orienté utilisateur.
      </p>
    </div>
  );
}