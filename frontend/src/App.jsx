import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register'; // On va le créer juste après

function App() {
    return (
        <Router>
            <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <Link to="/register" style={{ marginRight: '10px' }}>S'inscrire</Link>
                <Link to="/login">Se connecter</Link>
            </nav>

            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<h2>Page de Connexion (À venir)</h2>} />
                <Route path="/" element={<h2>Bienvenue sur EnergyTracker</h2>} />
            </Routes>
        </Router>
    );
}

export default App;