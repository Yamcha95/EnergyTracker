import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Connexion au Backend Spring Boot sur le port 8080
            const response = await axios.post('http://localhost:8080/api/auth/register', {
                email: email,
                password: password
            });
            alert(response.data); // Affiche "Utilisateur enregistré avec succès !"
        } catch (error) {
            alert("Erreur : " + (error.response?.data || "Serveur injoignable"));
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto' }}>
            <h2>Créer un compte</h2>
            <form onSubmit={handleRegister}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email :</label><br/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Mot de passe :</label><br/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%' }} />
                </div>
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>S'inscrire</button>
            </form>
        </div>
    );
}

export default Register;