import "./CV.css";

export default function CV() {
  return (
    <div className="cv-page">
      <h2>Mon CV</h2>

      {/* Ajout du cadre (wrapper) défini dans Cv.css */}
      <div className="cv-container">
        <div className="cv-image-wrapper">
          <img
            src="/cv.png"
            alt="CV Hadil Ben Soussia"
            className="cv-image" // Nom de classe corrigé pour correspondre au CSS
          />
        </div>
      </div>
    </div>
  );
}