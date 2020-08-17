import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";

import "./App.scss";

/**
 * TODO:
 *
 * 2. Check Responsiveness
 * 4. Add check for tab close in quiz
 *
 */

function App() {
  return (
    <div className="manual-app">
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
