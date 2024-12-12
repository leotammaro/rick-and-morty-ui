import { Character } from "../../interfaces/character";
import "./character-card.css";

export function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="character-card">
      <div>{character.name}</div>
      <img src={character.image} alt="character" className="character-image" />
      <div>{character.species}</div>
    </div>
  );
}
