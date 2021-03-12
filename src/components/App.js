import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SavedProperties from "./SavedProperties";

function App() {
  const [userID, setUserID] = useState("");
  const [savedProperties, setSavedProperties] = useState();

  const handleLogin = (response) => {
    setUserID(response.userID);
  };

  useEffect(() => {
    if (userID) {
      axios
        .get("http://localhost:4000/api/v1/Favourite")
        .then((results) => {
          setSavedProperties(results.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userID]);

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
          render={() => (
            <SavedProperties
              savedProperties={savedProperties}
              userID={userID}
            />
          )}
        />
      </Switch>
      <header className="App-header">
        <h1>Surreal Estate</h1>
      </header>
    </div>
  );
}
export default App;
