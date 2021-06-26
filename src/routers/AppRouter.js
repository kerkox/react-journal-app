import React from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { useState } from "react";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [{ checking }, setChecking] = useState({ checking: true });
  const [{ isLoggedIn }, setIsLoggedIn] = useState({ isLoggedIn: false });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn({ isLoggedIn: true });

        dispatch(startLoadingNotes(user.uid))
        
      } else {
        setIsLoggedIn({ isLoggedIn: false });
      }
      setChecking({ checking: false });
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isLoggedIn={isLoggedIn}
            path="/auth"
            component={AuthRouter}
          />
          <PrivateRoute
            isLoggedIn={isLoggedIn}
            path="/"
            component={JournalScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};
