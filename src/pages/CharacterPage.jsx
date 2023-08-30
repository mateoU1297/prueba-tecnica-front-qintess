import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "../components/Character";

const CharacterPage = () => {
  const url = "http://localhost:8080/api/characters";

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await axios.get(url);
      const rest = await response.data;
      setCharacters(rest);
      console.log(rest);
    }

    getCharacters();
  }, []);

  return (
    <>
      <h1>Character list</h1>
      <br></br>
      {characters.map((i) => (
        <Character
          image={i.image}
          name={i.name}
          status={i.status}
          species={i.species}
          gender={i.gender}
          originUrl={i.origin}
        />
      ))}
    </>
  );
};

export default CharacterPage;
