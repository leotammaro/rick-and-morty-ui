import { useSearchParams } from "react-router-dom";
import { IApiOptions } from "../../interfaces/character";
import React from "react";
export const useCharactersFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const page = (searchParams.get("page") as string)
    ? parseInt(searchParams.get("page")!)
    : 1;

  const setFilters = React.useCallback(
    (options: IApiOptions) => {
      setSearchParams((prev) => {
        if (options.name !== undefined) {
          prev.set("name", options.name);
        }
        if (options.page) {
          prev.set("page", options.page.toString());
        }
        return prev;
      });
    },
    [setSearchParams]
  );

  return { name, setFilters, page };
};
