import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills-page">

      <h2>Compétences Techniques & Soft Skills</h2>

      <section className="skills-section fade-in">
        <h3>Compétences Techniques</h3>

        <div className="skills-grid">

          <div className="skill-card">
            <h4>Développement Web</h4>
            <p>HTML, CSS, JavaScript</p>
          </div>

          <div className="skill-card">
            <h4>Programmation</h4>
            <p>Python, Java, C++</p>
          </div>

          <div className="skill-card">
            <h4>Business Intelligence</h4>
            <p>Power BI, Tableau</p>
          </div>

          <div className="skill-card">
            <h4>Intelligence Artificielle</h4>
            <p>Logique IA, traitement de données</p>
          </div>

          <div className="skill-card">
            <h4>Systèmes embarqués</h4>
            <p>Programmation ESIEABot</p>
          </div>

          <div className="skill-card">
            <h4>Outils Collaboratifs</h4>
            <p>Git, Jira, Office</p>
          </div>

        </div>
      </section>

      <section className="skills-section slide-up">
        <h3>Soft Skills</h3>

        <div className="skills-grid">

          <div className="skill-card soft">
            <h4>Adaptabilité</h4>
            <p>Apprentissage rapide.</p>
          </div>

          <div className="skill-card soft">
            <h4>Résolution de problèmes</h4>
            <p>Pensée analytique.</p>
          </div>

          <div className="skill-card soft">
            <h4>Communication</h4>
            <p>Clarté et synthèse.</p>
          </div>

          <div className="skill-card soft">
            <h4>Travail d'équipe</h4>
            <p>Collaboration agile.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
