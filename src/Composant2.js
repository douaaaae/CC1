import React, { useState } from 'react';

const Composant2 = () => {
  // Fictive data for employees
  const [salaries] = useState([
    {
      id: 1,
      nom: 'Dupont',
      prenom: 'Jean',
      fonction: 'Technicien',
      service: 'Informatique',
    },
    {
      id: 2,
      nom: 'Durand',
      prenom: 'Marie',
      fonction: 'Comptable',
      service: 'Finance',
    },
    {
      id: 3,
      nom: 'Lemoine',
      prenom: 'Paul',
      fonction: 'Responsable',
      service: 'Ressources Humaines',
    },
    {
      id: 4,
      nom: 'Martin',
      prenom: 'Claire',
      fonction: 'Stagiaire',
      service: 'Marketing',
    },
    {
        id: 5,
        nom: 'Alami',
        prenom: 'Sara',
        fonction: 'Stagiaire',
        service: 'Marketing',
      },
  ]);

  return (
    <div>
      <h1 align='center'>Liste des Salariés</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          {salaries.map((salarie) => (
            <tr
              key={salarie.id}
              style={{
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <td style={{ padding: '10px' }}>{salarie.nom}</td>
              <td style={{ padding: '10px' }}>{salarie.prenom}</td>
              <td style={{ padding: '10px' }}>{salarie.fonction}</td>
              <td style={{ padding: '10px' }}>{salarie.service}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Composant2;
