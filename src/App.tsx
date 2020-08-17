import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <Landing />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/quiz`}>
            <Quiz />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
