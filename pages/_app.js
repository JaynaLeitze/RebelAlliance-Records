import "../styles/globals.css";
import React from "react";
import { SwapiProvider, SwapiContext } from "../components/SwapiProvider";

function MyApp({ Component, pageProps }) {
  return (
    <SwapiProvider>
      <Component {...pageProps} />
    </SwapiProvider>
  );
}

export default MyApp;
