import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Composant1 = () => {
  const [voiture, setVoiture] = useState({
    matricule: "",
    marque: "",
    dateMiseEnCirculation: "",
    couleur: "",
  });
  const [recap, setRecap] = useState(null);

  const handleChange = (e) => {
    setVoiture({ ...voiture, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecap(voiture);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gestion Voitures</h1>
      <div className="card shadow p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="matricule" className="form-label">
              Matricule
            </label>
            <input
              type="text"
              id="matricule"
              name="matricule"
              placeholder="Matricule"
              value={voiture.matricule}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="marque" className="form-label">
              Marque
            </label>
            <input
              type="text"
              id="marque"
              name="marque"
              placeholder="Marque"
              value={voiture.marque}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="dateMiseEnCirculation" className="form-label">
              Date de Mise en Circulation
            </label>
            <input
              type="date"
              id="dateMiseEnCirculation"
              name="dateMiseEnCirculation"
              value={voiture.dateMiseEnCirculation}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="couleur" className="form-label">
              Couleur
            </label>
            <input
              type="text"
              id="couleur"
              name="couleur"
              placeholder="Couleur"
              value={voiture.couleur}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Confirmer
          </button>
        </form>
      </div>
      {recap && (
        <div className="card shadow mt-4 p-4">
          <h2 className="text-center mb-3">Récapitulatif des informations</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Matricule :</strong> {recap.matricule}
            </li>
            <li className="list-group-item">
              <strong>Marque :</strong> {recap.marque}
            </li>
            <li className="list-group-item">
              <strong>Date de mise en circulation :</strong>{" "}
              {recap.dateMiseEnCirculation}
            </li>
            <li className="list-group-item">
              <strong>Couleur :</strong> {recap.couleur}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Composant1;
