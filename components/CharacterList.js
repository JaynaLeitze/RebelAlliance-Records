import React, { useContext, useEffect, useState } from "react";
import { SwapiContext } from "./SwapiProvider";
import { Character } from "./Character";
import SearchField from "react-search-field";
import styles from "../styles/Character.module.css";
export const CharacterList = (props) => {
  const { character, setCharacter, getCharacters } = useContext(SwapiContext);

  return (
    <>
      <div className={styles.characterSearch}>
        <SearchField
          type="text"
          onEnter={(e) =>
            getCharacters(e).then((char) => setCharacter(char.results))
          }
          onSearchClick={(e) =>
            getCharacters(e).then((char) => setCharacter(char.results))
          }
          placeholder="Explore the galaxy "
        />
      </div>
      <div>
        {character.map((person) => {
          console.log("Hello", person);
          return <Character key={person.id} person={person} />;
        })}
      </div>
    </>
  );
};
