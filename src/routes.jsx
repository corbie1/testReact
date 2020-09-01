import React, { Component } from 'react';
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {App} from './App';
import routeConfig from './config/routes';
import Enter from './components/enter/enter'
import Buyers from './components/buyers/buyers';
import AddTerminal from './components/terminals/addTerminal';
import ClientPage from './components/clientPage/clientPage';
const WrappedComponent = (Component) => () =>(
    <App>
        <Component/>
    </App>
);

export default(
    
<Switch>
    <Route
    exact = {true}
    path={routeConfig.INDEX}
    component = {Enter}
    />
    <Route
    exact = {true}
    path={routeConfig.ENTER}
    component = {Enter}
    />
    <Route
    exact = {true}
    path={routeConfig.BUYERS}
    component = {WrappedComponent(Buyers)}
    />
    <Route
    exact = {true}
    path={routeConfig.TERMINALS}
    component = {WrappedComponent(AddTerminal)}
    />
    <Route
    exact = {true}
    path = "/buyers/:id" 
    component = {WrappedComponent(ClientPage)}
    />
</Switch>
)