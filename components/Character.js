import React, { useState, useEffect } from "react";
import { Film } from "./Film";
import { Starship } from "./Starship";
import { Vehicle } from "./Vehicle";

export const Character = ({ person }) => {
  const [film, setFilm] = useState([]);
  const [homeworld, setHomeworld] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const films = person.films;
  const planet = person.homeworld;
  const ships = person.starships;
  const speeders = person.vehicles;

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
    async function fetchVehicles() {
      const data = await Promise.all(
        speeders.map((url) => fetch(url).then((r) => r.json()))
      ).then((v) => setVehicles(v));
    }
    fetchFilms();
    fetchPlanet();
    fetchStarships();
    fetchVehicles();
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
        return <Film key={f.id} f={f} />;
      })}
      <h4> Starships: </h4>
      {starships.map((s) => {
        return <Starship key={s.id} s={s} />;
      })}
      <h4> Vehicles: </h4>
      {vehicles.map((v) => {
        return <Vehicle key={v.id} v={v} />;
      })}
    </div>
  );
};
