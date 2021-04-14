import React, { useState, useEffect, useContext } from "react";
import { Film } from "./Film";
import { Starship } from "./Starship";
import { Vehicle } from "./Vehicle";
import { Modal } from "./Modal";
import { SwapiContext } from "./SwapiProvider";
import styles from "../styles/Films.module.css";

export const Character = ({ person }) => {
  const { character } = useContext(SwapiContext);
  const [film, setFilm] = useState([]);
  const [homeworld, setHomeworld] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [filmModal, setFilmModal] = useState(false);
  const [starshipModal, setStarshipModal] = useState(false);
  const [vehicleModal, setVehicleModal] = useState(false);

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
    async function fetchSpecies() {
      const data = await fetch(planet)
        .then((r) => r.json())
        .then((s) => setSpecies(s));
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
    fetchSpecies();
    fetchStarships();
    fetchVehicles();
  }, [character]);

  return (
    <div>
      <h1> {person.name} </h1>
      <p> Homeworld: {homeworld.name}</p>
      <p> Height: {person.height} </p>
      <p> Mass: {person.mass} </p>
      <p> Hair Color: {person.hair_color}</p>
      <p> Birth Year: {person.birth_year}</p>
      <p> Species: {person.species} </p>
      <div>
        <h2>
          <a onClick={() => setFilmModal(true)}>Films</a>
        </h2>
        <Modal
          onClose={() => setFilmModal(false)}
          show={filmModal}
          className={styles.grid}
        >
          {film.map((f) => {
            return <Film key={f.id} f={f} />;
          })}
        </Modal>
      </div>
      {person.starships !== null ? (
        <div>
          <h2>
            <a onClick={() => setStarshipModal(true)}>Starships</a>
          </h2>
          <Modal onClose={() => setStarshipModal(false)} show={starshipModal}>
            {starships.map((s) => {
              return (
                <div>
                  <Starship key={s.id} s={s} />
                </div>
              );
            })}
          </Modal>
        </div>
      ) : (
        ""
      )}
      {person.vehicles !== null ? (
        <div>
          <h2>
            <a onClick={() => setVehicleModal(true)}>Vehicles</a>
          </h2>
          <Modal onClose={() => setVehicleModal(false)} show={vehicleModal}>
            {vehicles.map((v) => {
              return (
                <div>
                  <Vehicle key={v.id} v={v} />
                </div>
              );
            })}
          </Modal>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
