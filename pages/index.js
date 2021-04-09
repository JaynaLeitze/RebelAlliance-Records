import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ results }) {
  console.log(results);
  return (
    <div className={styles.container}>
      <Head>
        <title>Rebel Alliance Database</title>
      </Head>
      <h1>Rebel Alliance Records</h1>
      {results.results.map((c) => (
        <div>
          <h3>Name: {c.name} </h3>
          <p> Height: {c.height} </p>
          <p> Mass: {c.mass} </p>
          <p> Hair Color: {c.hair_color}</p>
          <p> Birth Year: {c.birth_year}</p>
          <p> Species: {c.species} </p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://swapi.dev/api/people/?search=luke&skywalker"
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      results: data,
    },
  };
}
