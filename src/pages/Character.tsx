import { useParams } from "react-router-dom";
import "./App.css";
import { useCharacters } from "../hooks/characters/useCharacters";
import { CharacterDetails } from "../components/character/CharacterDetails";
import "./character.css";
import { HomeButton } from "../components/home-button/HomeButton";

function Character() {
  const { id } = useParams();
  const { useGetOne } = useCharacters();

  const { data, isLoading, isError } = useGetOne(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>No search results found</div>;
  }

  return (
    <div className="character-details-container">
      <CharacterDetails character={data!} />
      <HomeButton />
    </div>
  );
}

export default Character;
