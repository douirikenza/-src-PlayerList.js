import React from "react";
import PlayerList from "./PlayerList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">FIFA Player Cards</h1>
      <PlayerList />
    </div>
  );
}

export default App;
