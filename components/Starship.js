import React from "react";
import styles from "../styles/Home.module.css";
//display starship data within starship modal defined on character page
export const Starship = ({ s }) => {
  return (
    <div className={styles.card}>
      <h3>{s.name}</h3>
      <p>Model: {s.model} </p>
      <p>Manufacturer: {s.manufacturer}</p>
      <p>Class: {s.starship_class}</p>
    </div>
  );
};
