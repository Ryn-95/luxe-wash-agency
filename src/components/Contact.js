import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-new">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">LW</span>
          </div>
          <div className="nav-menu">
            <div className="nav-links">
              <Link to="/">Accueil</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/reserver" className="nav-cta">Réserver</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="contact-main-new">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Nous Contacter</h1>
            <p>Une question ? Une demande particulière ? N'hésitez pas à nous joindre.</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Nos Coordonnées</h3>
              <div className="info-item">
                <Mail size={20} />
                <span>contact@luxewash.fr</span>
              </div>
              <div className="info-item">
                <Phone size={20} />
                <span>01 23 45 67 89</span>
              </div>
              <div className="info-item">
                <MapPin size={20} />
                <span>123 Avenue des Champs, 75008 Paris</span>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <h3>Envoyez-nous un message</h3>
              <form className="contact-form-new">
                <input type="text" placeholder="Votre nom" required />
                <input type="email" placeholder="Votre email" required />
                <textarea placeholder="Votre message" rows="6" required></textarea>
                <button type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact; 