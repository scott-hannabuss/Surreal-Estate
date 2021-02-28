import React from "react";
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Properties />
        </Route>
        <Route exact path="/AddProperty">
          <AddProperty />
        </Route>
      </Switch>
      <header className="App-header">
        <h1>Surreal Estate</h1>
      </header>
    </div>
  );
}
export default App;
