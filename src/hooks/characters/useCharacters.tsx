import { useQuery } from "@tanstack/react-query";
import api from "../../config/api";
import { PaginatedResponse } from "../../interfaces/pagination";
import { Character, IApiOptions } from "../../interfaces/character";

enum CHARACTERS_KEYS {
  CHARACTERS = "characters",
}

enum CHARACTERS_QUERIES {
  CHARACTER = "character",
}

export const useCharacters = () => {
  const useGetAll = (options?: IApiOptions) => {
    return useQuery({
      queryKey: [CHARACTERS_KEYS.CHARACTERS, options],
      staleTime: 1000 * 60 * 5,
      retry: false,
      queryFn: () =>
        api
          .get<PaginatedResponse<Character[]>>(CHARACTERS_QUERIES.CHARACTER, {
            params: options,
          })
          .then((response) => response.data),
    });
  };

  return { useGetAll };
};
