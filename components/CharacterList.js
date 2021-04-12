import React, { useContext, useEffect, useState } from "react";
import { CharacterSearch } from "./CharacterSearch";
import { SwapiContext } from "./SwapiProvider";
import { Character } from "./Character";
import SearchField from "react-search-field";

export const CharacterList = (props) => {
  const {
    character,
    setCharacter,
    searchTerms,
    setTerms,
    getCharacters,
  } = useContext(SwapiContext);

  return (
    <>
      <div className="characterSearch">
        <SearchField
          type="text"
          onEnter={(e) =>
            getCharacters(e).then((char) => setCharacter(char.results))
          }
          // onSearchClick={setTerms}
          placeholder="Explore the galaxy "
        />
        {console.log(character)}

        {character.map((person) => {
          console.log("Hello", person);
          return <Character key={person.id} person={person} />;
        })}
      </div>
    </>
  );
};
