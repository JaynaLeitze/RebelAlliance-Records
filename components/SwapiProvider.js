import React, { useState } from "react";

export const SwapiContext = React.createContext();

export const SwapiProvider = (props) => {
  const [character, setCharacter] = useState([]);
  const [race, setRace] = useState([]);

  const getCharacters = (char) => {
    return fetch(`https://swapi.dev/api/people/?search=${char}`).then((res) =>
      res.json()
    );
  };

  return (
    <SwapiContext.Provider
      value={{
        character,
        setCharacter,
        getCharacters,
        race,
        setRace,
      }}
    >
      {props.children}
    </SwapiContext.Provider>
  );
};
