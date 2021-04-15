import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { CharacterList } from "../components/CharacterList";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rebel Alliance Database</title>
      </Head>
      <h1 className={styles.title}>Rebel Alliance Records</h1>
      <CharacterList {...props} />
    </div>
  );
}
