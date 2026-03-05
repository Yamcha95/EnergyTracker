import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Accueil from './Accueil';
import Register from './Register';
import Login from './Login';
import Saisie from './Saisie';
import Dashboard from './Dashboard';
import './App.css'; // Pour tes styles globaux et ton logo

function App() {
    // On vérifie si l'utilisateur est connecté pour adapter la navigation
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('userId'));

    useEffect(() => {
        const handleStorageChange = () => {
            setIsAuthenticated(!!localStorage.getItem('userId'));
        };
        // On écoute les changements pour mettre à jour la barre de navigation en temps réel
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setIsAuthenticated(false);
        window.location.href = '/';
    };

    return (
        <Router>
            <div className="App">
                {/* Navbar Moderne et Adaptative */}
                <nav style={{
                    padding: '10px 30px',
                    background: '#2c3e50', // Ton bleu nuit pro
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <Link to="/" style={{ color: '#3498DB', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' }}>
                            ENERGYTracker
                        </Link>

                        {/* On affiche Dashboard et Saisie seulement si connecté */}
                        {isAuthenticated && (
                            <>
                                <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
                                <Link to="/saisie" style={{ color: 'white', textDecoration: 'none' }}>Saisie</Link>
                            </>
                        )}
                    </div>

                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        {!isAuthenticated ? (
                            <>
                                <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Connexion</Link>
                                <Link to="/register" style={{
                                    background: '#3498DB',
                                    padding: '8px 15px',
                                    borderRadius: '5px',
                                    color: 'white',
                                    textDecoration: 'none'
                                }}>S'inscrire</Link>
                            </>
                        ) : (
                            <button
                                onClick={handleLogout}
                                style={{
                                    cursor: 'pointer',
                                    background: '#e74c3c',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 15px',
                                    borderRadius: '5px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Déconnexion
                            </button>
                        )}
                    </div>
                </nav>

                {/* Configuration des routes */}
                <div style={{ padding: '20px' }}>
                    <Routes>
                        {/* La racine "/" affiche maintenant la page d'accueil */}
                        <Route path="/" element={<Accueil />} />

                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        {/* Protection simple des routes : redirection vers login si non connecté */}
                        <Route path="/saisie" element={isAuthenticated ? <Saisie /> : <Navigate to="/login" />} />
                        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;