import React from "react";

export const Character = ({ person }) => (
  <div>
    <h3>Name: {person.properties.name} </h3>
    <p> Height: {person.properties.height} </p>
    <p> Mass: {person.properties.mass} </p>
    <p> Hair Color: {person.properties.hair_color}</p>
    <p> Birth Year: {person.properties.birth_year}</p>
    <p> Species: {person.properties.species} </p>
  </div>
);
