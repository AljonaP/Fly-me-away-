import React, {createContext, useState} from 'react';
import { useHistory } from "react-router-dom";

// export const ContextAuthorization = createContext({});
export const AuthContext = createContext({});

function ContextAuthorizationProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    const history = useHistory();

    function login(){
        console.log("gebruiker is ingelogd");
        toggleIsAuth(true);
        history.push('/');
    }

    function logout(){
        toggleIsAuth(false);
        console.log("gebruiker is uitgelogd");
        history.push('/');
    }

    const data = {
        authorized: isAuth,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default ContextAuthorizationProvider;