import React, { useContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { CharacterList } from "../components/CharacterList";
// import { SwapiContext } from "../components/SwapiProvider";

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

// export async function getServerSideProps(char) {
//   const { getCharacters, character } = useContext(SwapiContext);
//   const res = getCharacters(char);
//   const data = character;

//   return {
//     props: {
//       results: data,
//     },
//   };
// }
