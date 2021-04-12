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
      <p>
        Films:
        {film.map((f) => {
          return (
            <p>
              {f.title}
              {f.episode_id}
              {f.director}
              {f.release_date}
            </p>
          );
        })}
      </p>
    </div>
  );
};
