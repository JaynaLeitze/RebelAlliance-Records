import React, { useState, useEffect } from "react";

export const Character = ({ person }) => {
  const [film, setFilm] = useState([]);
  const [homeworld, setHomeworld] = useState([]);
  const [starships, setStarships] = useState([]);

  //   const getFilm = () => {
  //     return person.films.map((url) =>
  //       fetch(url)
  //         .then((res) => res.json)
  //         .then(setFilm(film))
  //     );
  //   };

  const films = person.films;
  const planet = person.homeworld;
  const ships = person.starships;

  useEffect(() => {
    async function fetchFilms() {
      const data = await Promise.all(
        films.map((url) => fetch(url).then((r) => r.json()))
      ).then((a) => setFilm(a));
    }

    async function fetchPlanet() {
      const data = await fetch(planet)
        .then((r) => r.json())
        .then((p) => setHomeworld(p));
    }
    async function fetchStarships() {
      const data = await Promise.all(
        ships.map((url) => fetch(url).then((r) => r.json()))
      ).then((a) => setStarships(a));
    }
    fetchFilms();
    fetchPlanet();
    fetchStarships();
  }, []);

  return (
    <div>
      <h3>Name: {person.name} </h3>
      <p> Homeworld: {homeworld.name}</p>
      <p> Height: {person.height} </p>
      <p> Mass: {person.mass} </p>
      <p> Hair Color: {person.hair_color}</p>
      <p> Birth Year: {person.birth_year}</p>
      <p> Species: {person.species} </p>

      <h3> Films:</h3>
      {film.map((f) => {
        return (
          <div>
            <p> Title:{f.title}</p>
            <p>Episode:{f.episode_id}</p>
            <p> Director: {f.director}</p>
            <p> Release Date: {f.release_date}</p>
          </div>
        );
      })}
      <h4> Starships: </h4>
      {starships.map((s) => {
        return <p> {s.name} </p>;
      })}
    </div>
  );
};
