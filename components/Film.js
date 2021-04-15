import React from "react";
import styles from "../styles/Home.module.css";
//display film data within film modal defined on character page
export const Film = ({ f }) => {
  return (
    <div className={styles.card}>
      <h3> {f.title}</h3>
      <p>Episode:{f.episode_id}</p>
      <p> Director: {f.director}</p>
      <p> Release Date: {f.release_date}</p>
    </div>
  );
};
