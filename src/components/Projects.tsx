// src/components/Projects.tsx (VERSION SANS ERREUR DE CITATION)
const projectsData = [
  {
    id: 1,
    title: "CAP Santé : Application Mobile de Prévention Personnalisée",
    context: "Projet ESIEA visant à utiliser l'IA/règles pour automatiser le processus de prise de rendez-vous de prévention santé.",
    objectif: "Développement d'une application proposant des rendez-vous personnalisés via questionnaire et synchronisation d'agenda.",
    processus: [
      "Méthodologie **Agile** et gestion de projet **Scrum** pour le suivi des sprints.",
      "Conception UI/UX complète sur **Figma** (outil de Conception graphique).",
      "Intégration front-end et backend avec une **logique de suggestion** basée sur des règles/IA pour les recommandations.",
      "Rôle: Contribution transversale au projet, de la conception au développement, jusqu'aux tests et à l'intégration."
    ],
    resultat: "Prototype fonctionnel démontrant ma capacité à gérer un projet de bout en bout et à intégrer des logiques 'intelligentes' complexes.",
    stack: ["Figma", "Scrum", "Python", "React Native (Assumé)", "Git"],
  },
  {
    id: 2,
    title: "Digitalisation des Services Clients - Stage Tunisie Télécom",
    context: "Stage d'observation au sein de Tunisie Télécom.",
    objectif: "Contribuer à la conception d'applications mobiles, de portails web et à la maintenance des réseaux de communication.",
    processus: [
      "Application des compétences en **Développement Web (HTML, CSS, JavaScript)** pour la conception des interfaces clients.",
      "Participation aux processus de déploiement et de maintenance des réseaux de communication (filaires, sans fil, mobiles).",
    ],
    resultat: "Acquisition d'une double expertise : le développement web orienté client et la compréhension des infrastructures réseaux (télécoms).",
    stack: ["HTML", "CSS", "JavaScript", "Réseaux", "Java/C++ (Langages utilisés)"],
  }
];

const Projects = () => {
  // Le reste de votre code de rendu (return...) est correct
  return (
    <section id="projets" className="section-padding projects-section">
      <h2 className="section-title">Mes Réalisations (Mise en Valeur du Contenu)</h2>
      
      {projectsData.map(project => (
        <div key={project.id} className="project-card">
          <div className="project-details">
            <h3>{project.title}</h3>
            <p className="stack-used">**Stack Technique :** {project.stack.join(' | ')}</p>
            
            <p><strong>Contexte :</strong> {project.context}</p>
            <p><strong>Objectif :</strong> {project.objectif}</p>

            <h4>Processus et Rôle :</h4>
            <ul>
              {project.processus.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>

            <h4>Résultats & Leçons Apprises :</h4>
            <p>{project.resultat}</p>
            
            <a href="#" target="_blank" className="btn-project">Lien vers le Projet / Démo (à insérer)</a>
          </div>
        </div>
      ))}
      {/*  */}
    </section>
  );
};

export default Projects;