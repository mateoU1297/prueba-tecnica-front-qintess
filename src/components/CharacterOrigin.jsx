import React from "react";

const CharacterOrigin = ({ image, name, status, gender, species }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "20px" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Status: {status} </p>
        <p className="card-text">Gender: {gender} </p>
        <p className="card-text">Species: {species} </p>
      </div>
    </div>
  );
};

export default CharacterOrigin;
