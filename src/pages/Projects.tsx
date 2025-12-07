import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h2>Mes projets</h2>

      <div className="project-grid">

        <div className="project-card fade-in">
          <h3>Application mobile de prévention</h3>
          <p>Application de prévention santé utilisant questionnaire intelligent.</p>
          <Link to="/project/cap-projet" className="btn-primary">Voir le projet</Link>
        </div>

        <div className="project-card fade-in">
          <h3>Robot ESIEABot</h3>
          <p>Robot pédagogique open-source programmable.</p>
          <Link to="/project/esieabot" className="btn-primary">Voir le projet</Link>
        </div>

      </div>
    </div>
  );
}
