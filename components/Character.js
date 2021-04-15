import React, { useState, useEffect, useContext } from "react";
import { Film } from "./Film";
import { Starship } from "./Starship";
import { Vehicle } from "./Vehicle";
import { Modal } from "./Modal";
import { SwapiContext } from "./SwapiProvider";
import styles from "../styles/Character.module.css";

export const Character = ({ person }) => {
  //bring in state variables from swapicontext, define new state variables to be used
  const { character, race, setRace } = useContext(SwapiContext);
  const [film, setFilm] = useState([]);
  const [homeworld, setHomeworld] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [filmModal, setFilmModal] = useState(false);
  const [starshipModal, setStarshipModal] = useState(false);
  const [vehicleModal, setVehicleModal] = useState(false);

  //This data all comes is as urls from swapi, defined them as variables to use in useEffect
  const films = person.films;
  const planet = person.homeworld;
  const ships = person.starships;
  const speeders = person.vehicles;
  const creature = person.species;

  // This useEffect uses async functions to get data (and convert to json) from the urls that
  // came in with the character data, so that we can access the corresponding data within the component
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
      const data = await fetch(creature)
        .then((r) => r.json())
        .then((s) => setRace(s));
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
    //watch the state of the character so that all data is updated when a new search is performed
  }, [character]);

  return (
    //   display character data
    <div className={styles.grid_container}>
      <h1 className={styles.char}> {person.name} </h1>
      <div className={styles.char_info}>
        <p> Homeworld: {homeworld.name}</p>
        <p> Height: {person.height} </p>
        <p> Mass: {person.mass} </p>
        <p> Hair Color: {person.hair_color}</p>
        <p> Birth Year: {person.birth_year}</p>
        {/* "species" comes in as empty array for human characters */}
        {person.species.length >= 1 ? (
          <p> Species: {race.name} </p>
        ) : (
          <p>Species: Probably Humanoid</p>
        )}
      </div>
      <div className={styles.info}>
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

        {person.starships.length >= 1 ? (
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
        {person.vehicles.length >= 1 ? (
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
    </div>
  );
};
