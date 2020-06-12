import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Home from '../../pages/home';
import User from '../../pages/user';

const PrivateRoutes = () => (
    <BrowserRouter>
        
        <Route exact path="/home" component={ Home } />
        <Route       path="/user" component={ User } />

    </BrowserRouter>
);

export default PrivateRoutes;