import React, { useState } from "react";

export const SwapiContext = React.createContext();

export const SwapiProvider = (props) => {
  const [character, setCharacter] = useState([]);
  const [searchTerms, setTerms] = useState("");

  const getCharacters = (char) => {
    console.log(char);
    return fetch(`https://swapi.dev/api/people/?search=${char}`).then((res) =>
      res.json()
    );
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
