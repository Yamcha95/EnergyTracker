import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Accueil.css'; // Assure-toi de créer ce fichier CSS
import LogoBlue from './assets/logo-blue.png'; // Ton nouveau logo généré

function Accueil() {
    const navigate = useNavigate();

    return (
        <div className="accueil-container">
            {/* 1. NAVBAR */}
            <nav className="accueil-navbar">
                <div className="navbar-logo">
                    <img src={LogoBlue} alt="EnergyTracker Logo" />
                    <span>EnergyTracker</span>
                </div>
                <div className="navbar-auth">
                    <button className="btn-secondary" onClick={() => navigate('/login')}>Connexion</button>
                    <button className="btn-primary" onClick={() => navigate('/register')}>S'inscrire</button>
                </div>
            </nav>

            {/* 2. HERO SECTION */}
            <header className="accueil-hero">
                <div className="hero-content">
                    <h1>Reprenez le contrôle de votre consommation d'énergie</h1>
                    <p>EnergyTracker vous aide à suivre, visualiser et optimiser votre consommation d'Eau, de Gaz et d'Électricité au quotidien.</p>
                    <button className="btn-primary btn-lg" onClick={() => navigate('/register')}>Commencer gratuitement</button>
                </div>
                {/* Optionnel : Ajoute une illustration ou un screenshot stylisé ici */}
            </header>

            {/* 3. FEATURES SECTION */}
            <section className="accueil-features">
                <h2>Pourquoi choisir EnergyTracker ?</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <div className="feature-icon electricity-icon">⚡</div>
                        <h3>Suivi Multi-Énergies</h3>
                        <p>Centralisez vos relevés d'Électricité, Eau et Gaz en un seul endroit.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon dashboard-icon">📊</div>
                        <h3>Visualisation Claire</h3>
                        <p>Un tableau de bord intuitif avec graphiques pour comprendre votre consommation.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon savings-icon">💧</div>
                        <h3>Optimisation & Économies</h3>
                        <p>Identifiez les postes de dépenses et adoptez des habitudes plus durables.</p>
                    </div>
                </div>
            </section>

            {/* 4. FOOTER */}
            <footer className="accueil-footer">
                <p>&copy; 2026 EnergyTracker. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

export default Accueil;