import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // 1. Envoi de la requête au Backend
            console.log("Données envoyées :", { email, password });
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email: email,
                password: password
            });

            // 2. Si succès, on récupère l'ID du User renvoyé par le Backend
            const user = response.data;
            localStorage.setItem('userId', user.id); // Stockage de l'ID pour la suite

            alert("Connexion réussie !");

            // 3. Redirection vers le Dashboard
            navigate('/dashboard');

        } catch (error) {
            // Gestion de l'erreur pour éviter le [object Object]
            console.error("Erreur de connexion:", error.response?.data);

            const message = typeof error.response?.data === 'string'
                ? error.response.data
                : "Identifiants incorrects ou serveur injoignable";

            alert("Erreur : " + message);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center' }}>Connexion</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                    <label>Email :</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>Mot de passe :</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Se connecter
                </button>
            </form>
            <p style={{ marginTop: '15px', textAlign: 'center' }}>
                Pas encore de compte ? <a href="/register">S'inscrire</a>
            </p>
        </div>
    );
}

export default Login;