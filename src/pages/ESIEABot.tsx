export default function ESIEABot() {
  const baseUrl = import.meta.env.BASE_URL; 

  return (
    <div className="project-page">
      <h2>Robot pédagogique ESIEABot</h2>

      <img 
        src={`${baseUrl}robot.jpg`} 
        className="project-img fade-in" 
        alt="ESIEABot" 
      />

      <h3>Contexte</h3>
      <p>
        L’ESIEABot est un robot pédagogique open-source conçu par l’ESIEA pour apprendre
        la robotique, les systèmes embarqués, l’électronique et l’IA simple.
      </p>

      <h3>Objectif</h3>
      <p>Programmer moteurs, capteurs et comportements autonomes.</p>

      <h3>Processus</h3>
      <ul>
        <li>Analyse des composants</li>
        <li>Calibration des capteurs</li>
        <li>Programmation embarquée</li>
        <li>Comportement autonome</li>
      </ul>

      <h3>Résultat</h3>
      <p>
        Robot capable d’éviter les obstacles et suivre un trajet simple.
      </p>
    </div>
  );
}