import { useState } from 'react';
import axios from 'axios';

function Saisie() {
    const [type, setType] = useState('ELECTRICITY');
    const [value, setValue] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. On récupère l'ID de l'utilisateur connecté
        const userId = localStorage.getItem('userId');

        if (!userId) {
            alert("Erreur : Tu dois être connecté pour saisir une donnée.");
            return;
        }

        try {
            // 2. On envoie l'objet avec la référence au User
            await axios.post('http://127.0.0.1:8080/api/consumptions/add', {
                type,
                value: parseFloat(value),
                date,
                user: { id: parseInt(userId) } // C'est CA qui lie la conso à l'utilisateur
            });

            alert("Consommation enregistrée !");
            setValue('');
        } catch (error) {
            console.error(error);
            alert("Erreur : " + (error.response?.data || "Serveur injoignable"));
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h2>Ajouter une consommation</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <label>Type d'énergie :</label>
                <select value={type} onChange={(e) => setType(e.target.value)} style={{ padding: '8px' }}>
                    <option value="ELECTRICITY">Électricité (kWh)</option>
                    <option value="WATER">Eau (m³)</option>
                    <option value="GAS">Gaz (m³)</option>
                </select>

                <label>Valeur :</label>
                <input
                    type="number"
                    step="0.01"
                    placeholder="Valeur"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    style={{ padding: '8px' }}
                />

                <label>Date :</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    style={{ padding: '8px' }}
                />

                <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Enregistrer
                </button>
            </form>
        </div>
    );
}

export default Saisie;