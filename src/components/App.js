import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SavedProperties from "./SavedProperties";

function App() {
  const [userID, setUserID] = useState("");
  const [savedProperties, setSavedProperties] = useState();

  const [myProperties, setMyProperties] = useState();

  const handleLogin = (response) => {
    setUserID(response.userID);
  };

  useEffect(() => {
    if (userID) {
      axios
        .get("https://surrealestatedatabase.herokuapp.com/Favourite")
        .then((results) => {
          setSavedProperties(results.data);
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
          render={() =>
            userID ? (
              <SavedProperties
                myProperties={myProperties}
                setMyProperties={setMyProperties}
                savedProperties={savedProperties}
                userID={userID}
              />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Switch>
    </div>
  );
}
export default App;
