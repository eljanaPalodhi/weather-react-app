import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zurich" />
      </div>

      <footer>
        <a
          href="https://github.com/eljanaPalodhi/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        Coded by Eljana Palodhi{" "}
        <a
          href=" https://benevolent-paprenjak-9d51c9.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
