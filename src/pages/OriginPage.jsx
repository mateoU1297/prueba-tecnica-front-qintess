import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CharacterOrigin from "../components/CharacterOrigin";

const OriginPage = () => {
  const location = useLocation();
  const { name, image, status, species, gender } = location.state;
  useEffect(() => {
    console.log("name: ", name);
  });
  return <><CharacterOrigin image={image} name={name} status={status} species={species} gender={gender}/></>;
};

export default OriginPage;