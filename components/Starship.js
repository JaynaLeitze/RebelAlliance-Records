import React from "react";

export const Starship = ({ s }) => {
  return (
    <div>
      <h4>{s.name}</h4>
      <p>Model: {s.model} </p>
      <p>Manufacturer: {s.manufacturer}</p>
      <p>Class: {s.starship_class}</p>
    </div>
  );
};
