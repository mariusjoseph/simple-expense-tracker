import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppUserContext } from '../context/AppUserContext';


const PrivateRoute = ({ 
    component: Component, 
    ...rest 
}) => {

    const appUserContext = useContext(AppUserContext);

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (appUserContext._isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)} />                         
    );
}


export default PrivateRoute;