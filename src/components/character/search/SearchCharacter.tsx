import { useDebounce } from "use-debounce";
import { useCharactersFilters } from "../../../hooks/characters/useCharactersFilter";
import React from "react";

import "./search-character.css";

export function SearchCharacter() {
  const { name, setFilters } = useCharactersFilters();
  const [localSearch, setLocalSearch] = React.useState(name || "");
  const [debouncedSearch] = useDebounce(localSearch, 800);

  React.useEffect(() => {
    setFilters({ name: debouncedSearch, page: 1 });
  }, [debouncedSearch]);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="name..."
        value={localSearch}
        onChange={onchange}
        className="search-input"
      />
    </div>
  );
}
