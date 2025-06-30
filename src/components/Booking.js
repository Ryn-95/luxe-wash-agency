import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Calendar, Clock, User, Phone, Mail, MapPin, ArrowLeft, Check } from 'lucide-react';
import './Booking.css';

const Booking = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carModel: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: 1, name: 'Lavage Extérieur', price: '45€' },
    { id: 2, name: 'Nettoyage Intérieur', price: '60€' },
    { id: 3, name: 'Formule Complète', price: '90€' },
    { id: 4, name: 'Traitement Céramique', price: 'Sur devis' },
  ];

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedService && selectedDate && selectedTime && formData.name && formData.phone) {
      setIsSubmitted(true);
      // Ici vous pourriez ajouter l'intégration avec un backend
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const handleNextStep = () => {
    if (step === 1 && selectedService) setStep(2);
    if (step === 2 && selectedDate && selectedTime) setStep(3);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step">
            <h2 className="step-title">1. Choisissez un service</h2>
            <div className="service-list">
              {services.map(service => (
                <div
                  key={service.id}
                  className={`service-card ${selectedService === service.id ? 'selected' : ''}`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <h3>{service.name}</h3>
                  <p>{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step">
            <h2 className="step-title">2. Choisissez une date et une heure</h2>
            <div className="date-time-picker">
              <div className="calendar">
                <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
              </div>
              <div className="time-slots">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step">
            <h2 className="step-title">3. Vos informations</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="votre@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="carModel">Modèle de voiture</label>
                <input
                  type="text"
                  id="carModel"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  placeholder="ex: BMW X3, Audi A4..."
                />
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact">
        <div className="success-container">
          <div className="success-content">
            <div className="success-icon">
              <Check size={64} />
            </div>
            <h1>Réservation confirmée !</h1>
            <p>Nous avons bien reçu votre demande de réservation.</p>
            <div className="booking-summary">
              <h3>Récapitulatif :</h3>
              <p><strong>Service :</strong> {services.find(s => s.id === selectedService)?.name}</p>
              <p><strong>Date :</strong> {new Date(selectedDate).toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long' 
              })}</p>
              <p><strong>Heure :</strong> {selectedTime}</p>
              <p><strong>Client :</strong> {formData.name}</p>
            </div>
            <Link to="/" className="btn-primary">
              <ArrowLeft size={18} />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">LW</span>
          </div>
          <div className="nav-menu">
            <div className="nav-links">
              <Link to="/">Accueil</Link>
              <Link to="/contact" className="nav-cta">Réserver</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="contact-main">
        <div className="booking-container">
          <h1 className="booking-title">Réservez votre lavage</h1>
          <div className="progress-bar">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>Service</div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>Date & Heure</div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>Informations</div>
          </div>
          
          <div className="step-container">
            {renderStep()}
          </div>

          <div className="navigation-buttons">
            {step > 1 && <button className="prev-button" onClick={() => setStep(step - 1)}>Précédent</button>}
            {step < 3 && <button className="next-button" onClick={handleNextStep}>Suivant</button>}
            {step === 3 && <button className="submit-button">Confirmer la réservation</button>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking; 