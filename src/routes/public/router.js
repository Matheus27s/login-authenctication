import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Login from '../../pages/login';
import Register from '../../pages/register';

const PublicRoutes = () => (
    <BrowserRouter>
        <Route path="/home"    component={ Login } />
        <Route path="/register" component={ Register } />
    </BrowserRouter>
);

export default PublicRoutes;