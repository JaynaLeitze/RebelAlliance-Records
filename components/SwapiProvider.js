import React, { useState } from "react";

export const SwapiContext = React.createContext();

export const SwapiProvider = (props) => {
  const [character, setCharacter] = useState([]);
  const [searchTerms, setTerms] = useState([""]);

  const getCharacters = (character) => {
    return fetch(`https://swapi.dev/api/people/?search=${character}`)
      .then((res) => res.json())
      .then(setCharacter);
  };

  // const getFilm = (filmURL) => {
  //   return fetch(`${filmURL}`)
  //   .then((res) => res.json())
  //   }

  return (
    <SwapiContext.Provider
      value={{
        character,
        setCharacter,
        searchTerms,
        setTerms,
        getCharacters,
      }}
    >
      {props.children}
    </SwapiContext.Provider>
  );
};
