import React from "react";
import { useCharacters } from "../../hooks/characters/useCharacters";
import { useCharactersFilters } from "../../hooks/characters/useCharactersFilter";
import { Character } from "../../interfaces/character";
import { CharacterCard } from "../character/CharacterCard";
import "./characters-container.css";

export function CharactersContainer() {
  const { page, setFilters, name } = useCharactersFilters();

  const { useGetAll } = useCharacters();
  const { data, isLoading, isError } = useGetAll({
    name,
    page,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>No search results found</div>;
  }

  return (
    <>
      <div className="cards-container">
        {data?.results.map((character: Character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
      <div className="buttons-container">
        <button
          onClick={() => setFilters({ page: page - 1 })}
          className="pagination-button"
          disabled={data?.info.prev === null}
        >
          Prev
        </button>
        <button
          onClick={() => setFilters({ page: page + 1 })}
          className="pagination-button"
          disabled={data?.info.next === null}
        >
          Next
        </button>
      </div>
    </>
  );
}
