import React from "react";
import Header from "../Header/Header";
import LatestCases from "../LatestCases/LatestCases";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <LatestCases />
    </div>
  );
}

export default App;
