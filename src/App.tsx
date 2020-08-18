import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";

import "./App.scss";

function App() {
  return (
    <div className="manual-app">
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/quiz">
            <Quiz isUserDriven={false} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
