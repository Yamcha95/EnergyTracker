import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Saisie from './Saisie';
import Dashboard from './Dashboard';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Barre de navigation pour le jury */}
                <nav style={{
                    padding: '15px',
                    background: '#282c34',
                    color: 'white',
                    display: 'flex',
                    gap: '20px',
                    marginBottom: '30px'
                }}>
                    <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Connexion</Link>
                    <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Inscription</Link>
                    <Link to="/saisie" style={{ color: 'white', textDecoration: 'none' }}>Saisie</Link>
                    <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>

                    <button
                        onClick={() => { localStorage.clear(); window.location.href='/login'; }}
                        style={{ marginLeft: 'auto', cursor: 'pointer', background: 'red', color: 'white', border: 'none', borderRadius: '4px' }}
                    >
                        Déconnexion
                    </button>
                </nav>

                {/* Configuration des routes */}
                <Routes>
                    {/* Par défaut, on arrive sur le Login */}
                    <Route path="/" element={<Navigate to="/login" />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/saisie" element={<Saisie />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;