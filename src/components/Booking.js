import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    date: '',
    heure: '',
    commentaires: ''
  });

  const services = [
    {
      id: 'interieur',
      name: 'Nettoyage Intérieur',
      price: 'À partir de 35€',
      description: 'Canapés, matelas, tapis, appartements, maisons, bureaux, commerces'
    },
    {
      id: 'automobile',
      name: 'Nettoyage Automobile',
      price: 'À partir de 25€',
      description: 'Intérieur véhicule, service mobile à domicile, particuliers et pros'
    },
    {
      id: 'urbain',
      name: 'Nettoyage Urbain',
      price: 'Sur devis',
      description: 'Voiries, trottoirs, graffitis, aires de jeux, mobilier urbain, espaces verts'
    },
    {
      id: 'medical',
      name: 'Secteur Médical',
      price: 'Sur devis',
      description: 'Cabinets médicaux, vétérinaires, cliniques, hôpitaux, laboratoires'
    },
    {
      id: 'vitres',
      name: 'Nettoyage Vitres',
      price: 'À partir de 15€',
      description: 'Vitres résidentielles et commerciales, façades vitrées'
    },
    {
      id: 'airbnb',
      name: 'Locations Courte Durée',
      price: 'À partir de 45€',
      description: 'Nettoyage complet Airbnb, remise en état entre locataires'
    }
  ];

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Réservation soumise:', { service: selectedService, ...formData });
    alert('Votre demande de réservation a été envoyée ! Nous vous recontacterons rapidement.');
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-header">
          <h1 className="booking-title">Réservez votre service</h1>
          <p className="booking-subtitle">
            Sélectionnez le service qui vous convient et réservez en quelques clics
          </p>
        </div>

        <div className="booking-content">
          <div className="services-section">
            <h2 className="services-title">Nos Services</h2>
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card ${selectedService === service.id ? 'selected' : ''}`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <h3 className="service-name">{service.name}</h3>
                <p className="service-price">{service.price}</p>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="booking-form">
            <h2 className="form-title">Vos Informations</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="prenom" className="form-label">Prénom</label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    className="form-input"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nom" className="form-label">Nom</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    className="form-input"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telephone" className="form-label">Téléphone</label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    className="form-input"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="adresse" className="form-label">Adresse d'intervention</label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  className="form-input"
                  placeholder="Adresse complète où aura lieu le service"
                  value={formData.adresse}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">Date souhaitée</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-input"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="heure" className="form-label">Heure préférée</label>
                  <select
                    id="heure"
                    name="heure"
                    className="form-select"
                    value={formData.heure}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Choisir un créneau</option>
                    <option value="08:00">08:00 - 09:00</option>
                    <option value="09:00">09:00 - 10:00</option>
                    <option value="10:00">10:00 - 11:00</option>
                    <option value="11:00">11:00 - 12:00</option>
                    <option value="14:00">14:00 - 15:00</option>
                    <option value="15:00">15:00 - 16:00</option>
                    <option value="16:00">16:00 - 17:00</option>
                    <option value="17:00">17:00 - 18:00</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="commentaires" className="form-label">Commentaires (optionnel)</label>
                <textarea
                  id="commentaires"
                  name="commentaires"
                  className="form-textarea"
                  placeholder="Précisions sur le service souhaité, surface approximative, accès, etc."
                  value={formData.commentaires}
                  onChange={handleInputChange}
                  rows="4"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={!selectedService}
              >
                {selectedService ? 'Réserver maintenant' : 'Sélectionnez d\'abord un service'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking; 