import React, { useContext } from "react";
import { SwapiContext } from "./SwapiProvider";
// import SearchField from "react-search-field";

export const CharacterSearch = (props) => {
  const { setTerms } = useContext(SwapiContext);

  return (
    <div className="characterSearch">
      <input
        type="text"
        className="input--wide"
        onChange={(keyEvent) => setTerms(keyEvent.target.value)}
        placeholder="Explore the galaxy "
      />
    </div>
  );
};
