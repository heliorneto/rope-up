import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Cadastro from './Pages/Cadastro';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/cadastro" component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
