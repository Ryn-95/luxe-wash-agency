import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Users, Sparkles, Zap, Heart, MessageCircle, Send, Music, ArrowDown } from 'lucide-react';
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
                <span className="hero-line hero-line-1">Notre lavage auto</span>
                <span className="hero-line hero-line-2">est en</span>
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
                #fortheloveofclean
              </div>
              <h2 className="journey-heading">
                Nous sommes là pour le voyage,<br />
                <span className="journey-highlight">où que cela vous mène.</span>
              </h2>
            </div>
            <div className="journey-image">
              <img src="/images/porsche.jpg" alt="Porsche noire sur la route" className="journey-car-image" />
            </div>
          </div>
        </section>

        {/* Interior Section - Déplacé plus haut */}
        <section className="interior-section">
          <div className="container">
            <div className="interior-content">
              <div className="interior-image">
                <img src="/images/Lavage_interieur.jpg" alt="Nettoyage intérieur professionnel" />
              </div>
              <div className="interior-text">
                <h2 className="section-heading">
                  Intérieur<br />
                  <strong>impeccable</strong>
                </h2>
                <p className="section-description">
                  L'expérience premium se poursuit à l'intérieur. Nous traitons chaque surface avec une précision méticuleuse pour un résultat parfait.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Porsche Section */}
        <section className="video-section">
          <div className="container">
            <div className="video-content">
              <div className="video-text">
                <h2 className="section-heading">
                  Performance<br />
                  <strong>exceptionnelle</strong>
                </h2>
                <p className="section-description">
                  Quand la performance rencontre la pureté. Notre savoir-faire, au service de l'exception.
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

        {/* Wheels Section */}
        <section className="wheels-section">
          <div className="container">
            <div className="wheels-content">
              <div className="wheels-image">
                <img src="/images/Jante.jpg" alt="Jante premium étincelante" />
              </div>
              <div className="wheels-text">
                <h2 className="section-heading">
                  Jantes<br />
                  <strong>étincelantes</strong>
                </h2>
                <p className="section-description">
                  Plus que propres, elles sont transformées. Un traitement spécifique pour des jantes qui redéfinissent l'éclat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before-After Section */}
        <section className="transformation-section">
          <div className="container">
            <div className="transformation-content">
              <div className="transformation-text">
                <h2 className="section-heading">
                  Résultats<br />
                  <strong>visibles</strong>
                </h2>
                <p className="section-description">
                  L'image vaut mille mots. Découvrez la transformation Luxe Wash.
                </p>
              </div>
              <div className="transformation-image">
                <img src="/images/After-before.jpg" alt="Avant-après transformation véhicule" />
              </div>
            </div>
          </div>
        </section>

        {/* Video Brabus Section - Final "Design" TikTok */}
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
                      <p className="tiktok-caption">Le traitement céramique Brabus, c'est une autre dimension ✨ #carwash #detailing #brabus</p>
                    </div>
                    <div className="tiktok-music-ticker">
                      <Music size={16} className="tiktok-music-icon" />
                      <div className="tiktok-music-name">son original - Luxe Wash Official</div>
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
                        <span>1.2M</span>
                      </div>
                      <div className="tiktok-action">
                        <MessageCircle size={32} />
                        <span>45.1K</span>
                      </div>
                      <div className="tiktok-action">
                        <Send size={32} />
                        <span>89.4K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - "Manifesto" Design 2.0 */}
        <section className="manifesto-section">
          <div className="manifesto-container">
            <ol className="manifesto-list" ref={manifestoListRef}>
              <li className="manifesto-item">
                <span className="manifesto-number">01</span>
                <div className="manifesto-content">
                  <h2 className="manifesto-title">La <strong>technologie.</strong></h2>
                  <p className="manifesto-description">
                    Nous intégrons les innovations les plus récentes pour un lavage qui redéfinit la propreté. Chaque passage est une avancée.
                  </p>
                </div>
              </li>
              <li className="manifesto-item">
                <span className="manifesto-number">02</span>
                <div className="manifesto-content">
                  <h2 className="manifesto-title">Le <strong>service.</strong></h2>
                  <p className="manifesto-description">
                    Du simple lavage aux soins les plus détaillés, nous offrons une expérience adaptée à vos exigences. L'excellence n'est pas une option, c'est notre unique standard.
                  </p>
                </div>
              </li>
              <li className="manifesto-item">
                <span className="manifesto-number">03</span>
                <div className="manifesto-content">
                  <h2 className="manifesto-title">La <strong>passion.</strong></h2>
                  <p className="manifesto-description">
                    Notre équipe est notre plus grande fierté. Des experts dévoués qui partagent une seule obsession : la perfection de votre véhicule.
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
              découvrez nos abonnements<br />
              <strong className="exclusive-text">illimités exclusifs</strong>
            </h2>
          </div>
        </section>

        {/* Excitement Section */}
        <section className="excitement-section">
          <div className="container">
            <h2 className="section-heading excitement-title">
              Avez-vous déjà été excité<br />
              par un lavage auto ?
            </h2>
            <p className="excitement-subtitle">
              Nous non plus.
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
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Frame 598" className="career-image" />
              </div>
              <div className="career-frame">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Frame 597" className="career-image" />
              </div>
              <div className="career-frame">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Frame 599" className="career-image" />
              </div>
              <div className="career-frame">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Frame 600" className="career-image" />
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

      {/* Footer - Structure exacte */}
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