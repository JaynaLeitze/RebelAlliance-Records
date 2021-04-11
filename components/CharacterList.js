import React, { useContext, useEffect } from "react";
import { CharacterSearch } from "./CharacterSearch";
import { SwapiContext } from "./SwapiProvider";
import { Character } from "./Character";

export const CharacterList = (props) => {
  const {
    character,
    setCharacter,
    searchTerms,
    setTerms,
    getCharacters,
  } = useContext(SwapiContext);

  const char = searchTerms;

  useEffect(() => {
    getCharacters(char);
  });

  return (
    <>
      <CharacterSearch {...props} />

      {/* {char !== ""
        ? character.map(() => {
            return <Character {...props} />;
          })
        : ""} */}
    </>
  );
};
