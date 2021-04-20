import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Quotes from "./pages/Quotes";
import Home from "./pages/Home";
import Gifs from "./pages/Gifs";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Home path="/" />
        <Quotes path="/quotes" />
        <Gifs path="/gifs" />
      </Router>
    </div>
  );
};

export default App;
