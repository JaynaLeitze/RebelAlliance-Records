import React, { useContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { CharacterList } from "../components/CharacterList";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rebel Alliance Database</title>
      </Head>
      <h1>Rebel Alliance Records</h1>
      <CharacterList {...props} />
    </div>
  );
}

// export async function getServerSideProps(character) {
//   const res = await fetch(`https://swapi.dev/api/people/?search=${character}`);
//   const data = await res.json();

//   return {
//     props: {
//       results: data,
//     },
//   };
// }
