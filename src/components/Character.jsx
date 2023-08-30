import React from "react";
import { Link } from "react-router-dom";

const Character = ({ image, name, status, species, gender, originUrl }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <b>Status: </b> {status}
          </p>
          <p className="card-text">
            <b>Specie: </b> {species}
          </p>
          <p className="card-text">
            <b>Gender: </b> {gender}
          </p>
          <Link
            className="btn btn-primary"
            to="/origin"
            state={{ name, image, status, species, originUrl, gender }}
          >
            Ver Origen
          </Link>
        </div>
      </div>
    </>
  );
};

export default Character;
