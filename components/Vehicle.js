import React from "react";
import styles from "../styles/Home.module.css";

export const Vehicle = ({ v }) => {
  return (
    <div className={styles.card}>
      <h4>{v.name}</h4>
      <p>Model: {v.model}</p>
      <p>Manufacturer: {v.manufacturer}</p>
      <p>Class: {v.vehicle_class}</p>
    </div>
  );
};
