import React, { useState } from "react";
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
    
    <div>

      <h1>Gestion Voitures</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="matricule"
          placeholder="Matricule"
          value={voiture.matricule}
          onChange={handleChange}
          className="form-control"
          style={{width: '250px', marginLeft:'20px'}}
        /> <br />
        <input
          type="text"
          name="marque"
          placeholder="Marque"
          value={voiture.marque}
          onChange={handleChange}
          className="form-control"
          style={{width: '250px', marginLeft:'20px'}}
        /> <br />
        <input
          type="date"
          name="dateMiseEnCirculation"
          value={voiture.dateMiseEnCirculation}
          onChange={handleChange}
          className="form-control"
          style={{width: '250px', marginLeft:'20px'}}
        /> <br />
        <input
          type="text"
          name="couleur"
          placeholder="Couleur"
          value={voiture.couleur}
          onChange={handleChange}
          className="form-control"
          style={{width: '250px', marginLeft:'20px'}}
        /> <br />
        <button type="submit" className="btn btn-success" style={{ marginLeft:'20px'}}>Confirmer</button>
      </form>
      {recap && (
        <div>
          <h2>Récapitulatif des informations :</h2>
          <ul style={{ marginLeft:'20px'}}>
          <li>Matricule : {recap.matricule}</li>
          <li>Marque : {recap.marque}</li>
          <li>Date de mise en circulation : {recap.dateMiseEnCirculation}</li>
          <li>Couleur : {recap.couleur}</li>
          </ul>
        </div>
      )}

    </div>
   
  );
};

export default Composant1;


