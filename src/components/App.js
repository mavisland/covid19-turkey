import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import SonDurum from "../pages/SonDurum";
import Haberler from "../pages/Haberler";
import Onlemler from "../pages/Onlemler";
import Belirtiler from "../pages/Belirtiler";
import Dunya from "../pages/Dunya";
import SayfaBulunamadi from "../pages/SayfaBulunamadi";

// import LatestCases from "./LatestCases";
// import CaseCharts from "./CaseCharts";

function App() {
  return (
    <main className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <SonDurum />
        </Route>
        <Route path="/haberler">
          <Haberler />
        </Route>
        <Route path="/onlemler">
          <Onlemler />
        </Route>
        <Route path="/belirtiler">
          <Belirtiler />
        </Route>
        <Route path="/dunya">
          <Dunya />
        </Route>
        <Route>
          <SayfaBulunamadi />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
