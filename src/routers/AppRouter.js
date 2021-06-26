import React from 'react'
import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { useState } from 'react'

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [{checking}, setChecking] = useState({checking:true});
  const [{ isLoggedIn }, setIsLoggedIn] = useState({isLoggedIn:false});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn({isLoggedIn:true})
      } else {
        setIsLoggedIn({isLoggedIn:false})
      }
      setChecking({checking:false})
    })
  }, [dispatch, setChecking])

  if ( checking ) {
    return (
      <h1>Espere...</h1>
    )
  }
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={JournalScreen} />
          <Route>
            <Redirect to="/auth/login" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
