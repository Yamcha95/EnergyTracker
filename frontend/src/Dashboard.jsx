import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [consumptions, setConsumptions] = useState([]);
    // 1. On récupère l'ID de l'utilisateur connecté
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (userId) {
            // 2. Utilise bien les backticks ` et non ' pour inclure la variable ${userId}
            axios.get(`http://localhost:8080/api/consumptions/user/${userId}`)
                .then(response => {
                    console.log("Données reçues :", response.data);
                    setConsumptions(response.data);
                })
                .catch(error => console.error("Erreur Dashboard:", error));
        }
    }, [userId]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>📊 Mon Suivi Énergétique (Utilisateur n°{userId})</h2>

            {consumptions.length === 0 ? (
                <p>Aucune donnée trouvée. Essaie de faire une saisie !</p>
            ) : (
                <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ padding: '10px' }}>Date</th>
                        <th style={{ padding: '10px' }}>Type</th>
                        <th style={{ padding: '10px' }}>Valeur</th>
                    </tr>
                    </thead>
                    <tbody>
                    {consumptions.map((c) => (
                        <tr key={c.id}>
                            <td style={{ padding: '10px' }}>{c.date}</td>
                            <td style={{ padding: '10px' }}>{c.type}</td>
                            <td style={{ padding: '10px' }}>{c.value}</td>
                            <td style={{
                                padding: '10px',
                                fontWeight: 'bold',
                                color: c.type === 'ELECTRICITY' ? '#f1c40f' : c.type === 'WATER' ? '#3498db' : '#e67e22'
                            }}>
                                {c.type}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Dashboard;