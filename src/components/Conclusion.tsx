// src/components/Conclusion.tsx
const Conclusion = () => {
  return (
    <section id="conclusion" className="section-padding conclusion-section">
      <h2 className="section-title">Conclusion & Perspectives</h2>

      <div className="reflection-box">
        <h3>Réflexion Personnelle : 3 Compétences Humaines (Soft Skills)</h3>
        <p>Mon parcours m'a permis de solidifier des compétences transversales essentielles :</p>

        <ul>
          <li>
            **1. Résolution de Problèmes** : Développée lors du CAP Projet et des défis techniques. Je traduis les exigences en solutions pratiques.
          </li>
          <li>
            **2. Leadership & Travail d'Équipe** : Renforcés par la contribution transversale au projet et ma compétence en Travail d'équipe. Je sais prendre des initiatives et collaborer efficacement.
          </li>
          <li>
            **3. Adaptabilité** : Cruciale dans le secteur Tech. Elle s'est illustrée par la maîtrise des outils de Business Intelligence (**Power BI/Tableau**) et le passage entre divers langages (**Python, Java, C++**).
          </li>
        </ul>
      </div>

      <div className="projection-box">
        <h3>Projections : Quel ingénieur je souhaite devenir ?</h3>
        <p>
          Je souhaite devenir une **Ingénieure Data & IA** éthique et orientée business. Mon ambition est d'évoluer vers un rôle où je pourrai combiner mes compétences en Business Intelligence et en Développement pour avoir un impact direct sur la stratégie d'entreprise. Je m'engage à rester à la pointe des technologies pour construire des systèmes non seulement performants, mais aussi éthiques et responsables.
        </p>
      </div>

      <div className="contact-call">
        <p>Intéressé(e) par mon profil ? Contactez-moi !</p>
        <a href="mailto:hadil.bensoussia@et.esiea.fr" className="btn-primary">Envoyer un E-mail</a>
      </div>
    </section>
  );
};

export default Conclusion;