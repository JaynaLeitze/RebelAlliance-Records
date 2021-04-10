import React from "react";

export const Character = ({ character }) => (
  <div>
    <h3>Name: {character.name} </h3>
    <p> Height: {character.height} </p>
    <p> Mass: {character.mass} </p>
    <p> Hair Color: {character.hair_color}</p>
    <p> Birth Year: {character.birth_year}</p>
    <p> Species: {character.species} </p>
  </div>
);
