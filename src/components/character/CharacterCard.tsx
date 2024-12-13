import { Link } from "react-router-dom";
import { Character } from "../../interfaces/character";
import "./character-card.css";

export function CharacterCard({ character }: { character: Character }) {
  return (
    <Link className="character-card" to={`/${character.id}`}>
      <div>{character.name}</div>
      <img src={character.image} alt="character" className="character-image" />
      <div>{character.species}</div>
    </Link>
  );
}
