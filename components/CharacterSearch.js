import React, { useContext } from "react";
import { SwapiContext } from "./SwapiProvider";
import SearchField from "react-search-field";

export const CharacterSearch = (props) => {
  const { setTerms } = useContext(SwapiContext);

  return (
    <SearchField
      placeholder="Explore the galaxy..."
      onEnter={(keyEvent) => setTerms(keyEvent.target.value)}
      onSearchClick={(keyEvent) => setTerms(keyEvent.target.value)}
    />
  );
};
