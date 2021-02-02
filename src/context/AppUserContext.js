import React, { useState } from 'react';

export const AppUserContext = React.createContext({
    _isAuthenticated:false,
    _userinfo:{},
    _login:() => {},
    _signUp:() => []
});

const AppUser = props => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //joseph-todo - userInfo should be grabbed from the server
    const [userInfo, setUserInfo] = useState({});

    const loginContexHandler = (username, password) => {

        if(username === 'tester' && password === '12345678') {
            setUserInfo({
                userName:'jtester',
                name:'Joseph'
            });
            setIsAuthenticated(true);
        }
    }

    const signUpContextHandler = (
        name,
        email,
        password
    ) => {



    }

    return (
        <AppUserContext.Provider
            value={{
                _isAuthenticated: isAuthenticated,
                _userinfo:userInfo,
                _login:loginContexHandler,
                _signUp:signUpContextHandler
            }}
        >
            {props.children}
        </AppUserContext.Provider>
    );
};

export default AppUser;