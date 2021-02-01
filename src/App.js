import React, { useContext } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { AppUserContext } from './context/AppUserContext';

//import './App.css';

const App = () => {
  
 let routes = (
  <Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <PrivateRoute component={ExpenseTrackerDashBoard} path="/dashboard" exact />
    <Redirect to="/" />
  </Switch>
 );

  return (
    routes
  );
}

export default App;
