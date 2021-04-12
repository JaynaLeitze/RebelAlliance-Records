import React, { useState, useEffect } from "react";

export const Character = ({ person }) => {
  const [film, setFilm] = useState([]);

  //   const getFilm = () => {
  //     return person.films.map((url) =>
  //       fetch(url)
  //         .then((res) => res.json)
  //         .then(setFilm(film))
  //     );
  //   };

  const films = person.films;
  console.log(films);

  useEffect(() => {
    async function fetchAll() {
      const data = await Promise.all(
        films.map((url) => fetch(url).then((r) => r.json()))
      ).then((a) => setFilm(a));
    }
    fetchAll();
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
    </div>
  );
};
