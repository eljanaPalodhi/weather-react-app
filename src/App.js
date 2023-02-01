import react from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>

      <footer>
        <a
          href="https://github.com/eljanaPalodhi/weather-react-app"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
        Coded by Eljana Palodhi{" "}
        <a href=" " target="_blank">
          {" "}
          Hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
