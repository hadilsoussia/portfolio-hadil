import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-left">
          <h3 className="footer-title">Hadil BEN SOUSSIA</h3>
          <p>Ingénierie Informatique · IA & Big Data</p>
        </div>

        <div className="footer-links">
          <a href="mailto:hadil.bensoussia@et.esiea.fr">Email</a>
          <a href="https://linkedin.com/in/hadil-ben-soussia-421178274" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/hadilsoussia/" target="_blank">
            GitHub
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Portfolio - Hadil BEN SOUSSIA — Tous droits réservés.</p>
      </div>

    </footer>
  );
}
