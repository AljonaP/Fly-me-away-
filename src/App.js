import React from 'react';
// import {useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';

// import {Redirect, useHistory, NavLink, } from 'react-router-dom';
// import React, {useEffect, useState} from 'react';


import HomePage from './pages/home/Home'
import CreateAccountPage from './pages/create-account/Create-account';
import LoginPage from './pages/login/Login';
import GeneralConditionsPage from './pages/general-conditions/General-conditions';
import PrivacyPolicyPage from './pages/privacy-policy/Privacy-policy';
import SearchResultsPage from './pages/search-results/Search-results';
import TopMenu from './components/TopMenu/TopMenu';
// import {AuthContext} from './context/ContextAuthorization';
import Footer from "./components/Footer/Footer";


function App() {
    // const {isAuth} = useContext(AuthContext);

    return (
        <Router>

            <TopMenu/>

            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route path="/account-aanmaken">
                    <CreateAccountPage/>
                </Route>

                <Route path="/inloggen">
                    <LoginPage/>
                </Route>

                <Route path="/zoekresultaten">
                    <SearchResultsPage/>
                    {/*<SearchResultsPage isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>*/}
                </Route>

                <Route exact path="/algemene-voorwaarden">
                    <GeneralConditionsPage/>
                </Route>

                <Route exact path="/privacybeleid">
                    <PrivacyPolicyPage/>
                </Route>

            </Switch>

            <Footer/>


        </Router>
    );
}




export default App;
