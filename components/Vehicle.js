import React from "react";

export const Vehicle = ({ v }) => {
  return (
    <div>
      <h4>{v.name}</h4>
      <p>Model: {v.model}</p>
      <p>Manufacturer: {v.manufacturer}</p>
      <p>Class: {v.vehicle_class}</p>
    </div>
  );
};
