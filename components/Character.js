import React, { useState, useEffect } from "react";

export const Character = ({ person }) => {
  const [film, setFilm] = useState([]);

  const getFilm = (data) => {
    return person.films.map((url) =>
      fetch(url)
        .then((res) => res.json)
        .then(setFilm(data))
    );
  };

  useEffect(() => {
    getFilm();
  }, []);

  console.log(film);
  return (
    <div>
      <h3>Name: {person.name} </h3>
      <p> Homeworld: {person.homeworld}</p>
      <p> Height: {person.height} </p>
      <p> Mass: {person.mass} </p>
      <p> Hair Color: {person.hair_color}</p>
      <p> Birth Year: {person.birth_year}</p>
      <p> Species: {person.species} </p>
      <p> Films: </p>
    </div>
  );
};
