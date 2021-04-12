import React, { useContext } from "react";
import { SwapiContext } from "./SwapiProvider";
import SearchField from "react-search-field";

export const CharacterSearch = (props) => {
  const { setTerms, getCharacters, character, searchTerms } = useContext(
    SwapiContext
  );

  return (
    <div className="characterSearch">
      <SearchField
        type="text"
        onEnter={(e) => getCharacters(e)}
        // onSearchClick={setTerms}
        placeholder="Explore the galaxy "
      />
    </div>
  );
};
