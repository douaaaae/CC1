import React, { useState } from 'react';

const Composant3 = () => {
  // Fictive data for employees
  const [salaries] = useState([
    { id: 1, nom: 'Dupont', prenom: 'Jean', fonction: 'Technicien', service: 'Informatique' },
    { id: 2, nom: 'Durand', prenom: 'Marie', fonction: 'Comptable', service: 'Finance' },
    { id: 3, nom: 'Lemoine', prenom: 'Paul', fonction: 'Responsable', service: 'Ressources Humaines' },
    { id: 4, nom: 'Martin', prenom: 'Claire', fonction: 'Stagiaire', service: 'Marketing' },
    { id: 5, nom: 'Alami', prenom: 'Sara', fonction: 'Stagiaire', service: 'Marketing' },
  ]);

  const [serviceSearch, setServiceSearch] = useState('');
  const [filteredSalaries, setFilteredSalaries] = useState([]);

  const handleSearch = () => {
    if (!serviceSearch) {
      setFilteredSalaries([]);
      return;
    }

    const results = salaries.filter((salarie) =>
      salarie.service.toLowerCase().includes(serviceSearch.toLowerCase())
    );
    setFilteredSalaries(results);
  };

  const handleInputChange = (e) => {
    setServiceSearch(e.target.value);
    if (e.target.value === '') {
      setFilteredSalaries([]); // Show all employees if search input is cleared
    } else {
      handleSearch();
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Recherche par Service</h1>
      <div className="row mb-3">
        <div className="col-md-8 offset-md-2">
          <label htmlFor="serviceSearch" className="form-label">Nom du service</label>
          <input
            type="text"
            id="serviceSearch"
            className="form-control"
            placeholder="Entrer le nom du service"
            value={serviceSearch}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSearch}>
          Rechercher
        </button>
      </div>
      <div className="mt-4">
        {filteredSalaries.length > 0 ? (
          <ul>
            {filteredSalaries.map((salarie) => (
              <li key={salarie.id}>
                {salarie.nom} | {salarie.prenom} | {salarie.fonction}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-danger">
            {serviceSearch === '' ? 'Entrez un nom de service pour effectuer une recherche.' : 'Aucun salarié n\'est affecté à ce service.'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Composant3;
