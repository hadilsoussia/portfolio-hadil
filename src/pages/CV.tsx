import "./CV.css";

export default function CV() {
  const baseUrl = import.meta.env.BASE_URL; 

  return (
    <div className="cv-page">
      <h2>Mon CV</h2>

      {/* Ajout du cadre (wrapper) défini dans Cv.css */}
      <div className="cv-container">
        <div className="cv-image-wrapper">
          <img
            src={`${baseUrl}cv.png`}
            alt="CV Hadil Ben Soussia"
            className="cv-image" 
          />
        </div>
      </div>
    </div>
  );
}