import React, { useState } from "react";
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SavedProperties from "./SavedProperties";

function App() {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    setUserID(response.userID);
  };

  console.log(userID);

  const handleLogout = () => {
    window.FB.logout(() => {});
    setUserID("");
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userID={userID} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/" render={() => <Properties userID={userID} />} />
        <Route exact path="/AddProperty">
          <AddProperty />
        </Route>
        <Route
          exact
          path="/SavedProperties"
          render={() => <SavedProperties userID={userID} />}
        />
      </Switch>
      <header className="App-header">
        <h1>Surreal Estate</h1>
      </header>
    </div>
  );
}
export default App;
