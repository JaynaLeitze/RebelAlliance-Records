import React, { useContext, useEffect } from "react";
import { CharacterSearch } from "../components/CharacterSearch";
import { SwapiContext } from "../components/SwapiProvider";
import { Character } from "../components/Character";

export const CharacterList = (props) => {
  const {
    character,
    setCharacter,
    searchTerms,
    setTerms,
    getCharacters,
  } = useContext(SwapiContext);

  const characters = searchTerms;

  useEffect(() => {
    getCharacters(characters);
  });

  return (
    <>
      <CharacterSearch {...props} />

      {characters !== null ? character.map(<Character {...props} />) : ""}
    </>
  );
};
