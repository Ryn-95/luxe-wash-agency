import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Send, Music, ArrowDown } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const manifestoListRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const items = manifestoListRef.current?.querySelectorAll('.manifesto-item');
    if (items) {
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (items) {
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <div className="home">
      {/* Navigation - Skip to content + Menu */}
      <a href="#main-content" className="skip-link">Skip to content</a>
      
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

      <main id="main-content">
        {/* Hero Section - FINAL REVAMP */}
        <section className="hero-section">
          <div className="container">
            <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
              <h1 className="hero-heading">
                <span className="hero-line hero-line-1">Nos services de nettoyage</span>
                <span className="hero-line hero-line-2">sont en</span>
                <span className="hero-line hero-line-3"><strong>overdrive</strong></span>
              </h1>
            </div>
          </div>
          <div className={`scroll-indicator ${isLoaded ? 'visible' : ''}`}>
            <ArrowDown size={24} />
          </div>
        </section>

        {/* Journey Section - Avec image intégrée */}
        <section className="journey-section">
          <div className="journey-container">
            <div className="journey-text">
              <div className="journey-hashtag">
                #nettoyageprofessionnel
              </div>
              <h2 className="journey-heading">
                Nous sommes là pour tous vos besoins,<br />
                <span className="journey-highlight">où que vous soyez.</span>
              </h2>
            </div>
            <div className="journey-image">
              <img src="/images/porsche.jpg" alt="Service de nettoyage professionnel" className="journey-car-image" />
            </div>
          </div>
        </section>

        {/* Interior Section - Nettoyage intérieur */}
        <section className="interior-section">
          <div className="container">
            <div className="interior-content">
              <div className="interior-image">
                <img src="/images/Lavage_interieur.jpg" alt="Nettoyage intérieur professionnel" />
              </div>
              <div className="interior-text">
                <h2 className="section-heading">
                  Nettoyage<br />
                  <strong>intérieur</strong>
                </h2>
                <p className="section-description">
                  Canapés, matelas, tapis, appartements, maisons, bureaux. Nous traitons chaque surface avec une précision méticuleuse pour un résultat impeccable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - Services automobiles */}
        <section className="video-section">
          <div className="container">
            <div className="video-content">
              <div className="video-text">
                <h2 className="section-heading">
                  Nettoyage<br />
                  <strong>automobile</strong>
                </h2>
                <p className="section-description">
                  Service mobile à domicile. Intérieur véhicule, particuliers et professionnels. L'excellence au service de votre mobilité.
                </p>
              </div>
              <div className="video-wrapper">
                <video 
                  className="feature-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/video/video_porshe.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Urban Section - Nettoyage urbain */}
        <section className="wheels-section">
          <div className="container">
            <div className="wheels-content">
              <div className="wheels-image">
                <img src="/images/Jante.jpg" alt="Nettoyage urbain et espaces verts" />
              </div>
              <div className="wheels-text">
                <h2 className="section-heading">
                  Nettoyage<br />
                  <strong>urbain</strong>
                </h2>
                <p className="section-description">
                  Voiries, trottoirs, graffitis, aires de jeux, mobilier urbain. Tonte, taille, arrosage des espaces verts. La ville propre et entretenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Section - Secteur médical */}
        <section className="transformation-section">
          <div className="container">
            <div className="transformation-content">
              <div className="transformation-text">
                <h2 className="section-heading">
                  Secteur<br />
                  <strong>médical</strong>
                </h2>
                <p className="section-description">
                  Cabinets médicaux, vétérinaires, cliniques, hôpitaux, laboratoires. Nettoyage spécialisé selon les normes d'hygiène les plus strictes.
                </p>
              </div>
              <div className="transformation-image">
                <img src="/images/After-before.jpg" alt="Nettoyage médical professionnel" />
              </div>
            </div>
          </div>
        </section>

        {/* Video TikTok Section - Showcase services */}
        <section className="tiktok-section">
          <div className="tiktok-viewer">
            <div className="tiktok-viewer-frame">
              <div className="tiktok-video-wrapper">
                <video 
                  className="tiktok-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/video/video_brabus.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
                <div className="tiktok-overlay">
                  <div className="tiktok-content-left">
                    <div className="tiktok-text">
                      <h3 className="tiktok-username">@luxewash</h3>
                      <p className="tiktok-caption">Nettoyage professionnel tous secteurs ✨ #nettoyage #professionnel #luxewash</p>
                    </div>
                    <div className="tiktok-music-ticker">
                      <Music size={16} className="tiktok-music-icon" />
                      <div className="tiktok-music-name">son original - Luxe Wash Professional</div>
                    </div>
                  </div>
                  <div className="tiktok-content-right">
                    <div className="tiktok-album">
                      <div className="tiktok-album-art">
                        <span className="tiktok-album-logo">LW</span>
                      </div>
                    </div>
                    <div className="tiktok-actions">
                      <div className="tiktok-action">
                        <Heart size={32} />
                        <span>2.1M</span>
                      </div>
                      <div className="tiktok-action">
                        <MessageCircle size={32} />
                        <span>67.3K</span>
                      </div>
                      <div className="tiktok-action">
                        <Send size={32} />
                        <span>124K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - "Manifesto" Design */}
        <section className="manifesto-section">
          <div className="manifesto-container">
            <ol className="manifesto-list" ref={manifestoListRef}>
              <li className="manifesto-item">
                <span className="manifesto-number">01</span>
                <div className="manifesto-content">
                  <h2 className="manifesto-title">La <strong>polyvalence.</strong></h2>
                  <p className="manifesto-description">
                    Intérieur, automobile, urbain, médical. Nous maîtrisons tous les secteurs du nettoyage avec la même excellence et le même professionnalisme.
                  </p>
                </div>
              </li>
              <li className="manifesto-item">
                <span className="manifesto-number">02</span>
                <div className="manifesto-content">
                  <h2 className="manifesto-title">La <strong>mobilité.</strong></h2>
                  <p className="manifesto-description">
                    Service à domicile, intervention sur site, solutions mobiles. Nous venons à vous avec tout l'équipement nécessaire pour un service optimal.
                  </p>
                </div>
              </li>
              <li className="manifesto-item">
                <span className="manifesto-number">03</span>
                <div className="manifesto-content">
                  <h2 className="manifesto-title">L'<strong>expertise.</strong></h2>
                  <p className="manifesto-description">
                    Normes d'hygiène strictes, techniques spécialisées, formation continue. Notre équipe est notre plus grande fierté et votre garantie de qualité.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Membership Section */}
        <section className="membership-section">
          <div className="container">
            <h2 className="section-heading">
              découvrez nos contrats<br />
              <strong className="exclusive-text">d'entretien régulier</strong>
            </h2>
          </div>
        </section>

        {/* Excitement Section */}
        <section className="excitement-section">
          <div className="container">
            <h2 className="section-heading excitement-title">
              Avez-vous déjà été impressionné<br />
              par un service de nettoyage ?
            </h2>
            <p className="excitement-subtitle">
              Nous non plus, avant de créer le nôtre.
            </p>
            <Link to="/contact" className="cta-button">
              Commencer
            </Link>
          </div>
        </section>

        {/* Career Section */}
        <section className="career-section">
          <div className="container">
            <h2 className="section-heading">
              Prêt à booster<br />
              votre carrière ?
            </h2>
            <h3 className="career-subtitle">
              Rejoignez l'équipe.
            </h3>
            
            <div className="career-images">
              <div className="career-frame">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Équipe nettoyage" className="career-image" />
              </div>
              <div className="career-frame">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Professionnel nettoyage" className="career-image" />
              </div>
              <div className="career-frame">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Service client" className="career-image" />
              </div>
              <div className="career-frame">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Équipe diverse" className="career-image" />
              </div>
            </div>

            <div className="career-benefits">
              <h3 className="benefits-heading">
                Excellents avantages.<br />
                Opportunités de croissance.<br />
                Des gens extraordinaires.
              </h3>
              <button className="apply-button">
                Postuler maintenant
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <nav className="footer-nav">
            <div className="footer-links">
              <Link to="/">Accueil</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/reserver">Réserver</Link>
            </div>
          </nav>
          
          <div className="footer-contact">
            <span>Nous contacter</span>
          </div>
          
          <div className="footer-social">
            <span>Facebook</span>
            <span>Youtube</span>
            <span>X-twitter</span>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Copyright ©2025 Luxe Wash Holdings<br />
            Site web conçu avec amour par BeZe Creative
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home; 