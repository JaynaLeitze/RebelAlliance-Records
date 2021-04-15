import React from "react";
import styles from "../styles/Home.module.css";
//display vehicle data within vehicle modal defined on character page
export const Vehicle = ({ v }) => {
  return (
    <div className={styles.card}>
      <h3>{v.name}</h3>
      <p>Model: {v.model}</p>
      <p>Manufacturer: {v.manufacturer}</p>
      <p>Class: {v.vehicle_class}</p>
    </div>
  );
};
