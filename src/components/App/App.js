import React from "react";
import Header from "../Header/Header";
import LatestCases from "../LatestCases/LatestCases";
import CaseCharts from "../CaseCharts/CaseCharts";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <LatestCases />
      <CaseCharts />
    </div>
  );
}

export default App;
