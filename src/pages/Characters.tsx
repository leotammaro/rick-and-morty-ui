import { CharactersContainer } from "../components/characters/CharactersContainer";
import { SearchCharacter } from "../components/character/search/SearchCharacter";
import React from "react";

import "./characters.css";

export function Characters() {
  return (
    <div className="characters-container">
      <div className="header">
        <h2>Rick and Morty</h2>
        <SearchCharacter />
      </div>
      <CharactersContainer />
    </div>
  );
}
