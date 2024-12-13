import React from "react";
import { Character } from "../../interfaces/character";
import { DescriptionContainer } from "../description-container/DescriptionContainer";
import "./character-details.css";

enum CHARACTER_TITLES {
  SPECIES = "Species",
  STATUS = "Status",
  LAST_LOCATION = "Last Location",
  EPISODES = "Episodes",
}

export function CharacterDetails({ character }: { character: Character }) {
  const episodes = React.useMemo(() => {
    return character.episode.map((episode) => {
      return episode.split("/").pop();
    });
  }, [character]);

  return (
    <div className="character-details">
      <h1>Character details</h1>
      <img
        src={character.image}
        alt="character"
        className="character-image-details"
      />
      <h2>{character.name}</h2>

      <div className="descriptions-container">
        <DescriptionContainer
          title={CHARACTER_TITLES.SPECIES}
          value={character.species}
        />
        <DescriptionContainer
          title={CHARACTER_TITLES.STATUS}
          value={character.status}
        />
        <DescriptionContainer
          title={CHARACTER_TITLES.LAST_LOCATION}
          value={character.location.name}
        />
        <DescriptionContainer
          title={CHARACTER_TITLES.EPISODES}
          value={episodes.join(", ")}
        />
      </div>
    </div>
  );
}
