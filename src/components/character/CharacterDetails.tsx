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

  const characterDescriptions = [
    { title: CHARACTER_TITLES.SPECIES, value: character.species },
    { title: CHARACTER_TITLES.STATUS, value: character.status },
    { title: CHARACTER_TITLES.LAST_LOCATION, value: character.location.name },
    { title: CHARACTER_TITLES.EPISODES, value: episodes.join(", ") },
  ];

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
        {characterDescriptions.map((description) => (
          <DescriptionContainer
            key={description.title}
            title={description.title}
            value={description.value}
          />
        ))}
      </div>
    </div>
  );
}
