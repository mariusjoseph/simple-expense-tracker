import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//Pages
//import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import ExpenseTrackerDashBoard from './pages/expenseTrackerDashBoard/ExpenseTrackerDashBoard';

//Common
import PrivateRoute from './common/PrivateRoute';

//Un-used
//import { AppUserContext } from './context/AppUserContext';
//import './App.css';

const App = () => {
  
 let routes = (
  <Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <PrivateRoute component={ExpenseTrackerDashBoard} path="/dashboard" exact />
    <Route path="/" exact component={SignIn} />
    <Redirect to="/" component={SignIn} />
  </Switch>
 );

  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
