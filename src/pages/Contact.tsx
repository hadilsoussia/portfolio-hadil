import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>

      <div className="contact-grid">
        
        {/* Colonne gauche : Informations texte */}
        <div className="contact-info">
          <div className="contact-item">
            <h3>📧 Email</h3>
            <p><strong>hadil.bensoussia@et.esiea.fr</strong></p>
          </div>

          <div className="contact-item">
            <h3>📱 Téléphone</h3>
            <p><strong>+33 6 09 39 42 07</strong></p>
            
          </div>

          <div className="contact-item">
            <h3>🔗 LinkedIn</h3>
            <p>
              <a 
                href="https://linkedin.com/in/hadil-ben-soussia-421178274" 
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/hadil-ben-soussia-421178274
              </a>
            </p>
            <p className="qr-caption">Scannez le QR Code pour me suivre</p>
          </div>
        </div>

        {/* Colonne droite : QR Code */}
        <div className="qr-section">
          <div className="qr-container fade-in">
            <img 
  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://linkedin.com/in/hadil-ben-soussia-421178274" 
  alt="QR Code LinkedIn Hadil Ben Soussia" 
  className="qr-code"
/>
            <p className="qr-note">
              Scannez-moi pour accéder à mon profil LinkedIn
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}