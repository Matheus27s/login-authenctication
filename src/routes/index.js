import React from 'react';

//Contextss:
import { useAuth } from '../context/AuthContext';

//Components:
import Loading from '../pages/loading';

import PublicRoutes from './public/router';
import PrivateRoutes from './private/router';

const Routes = () => {
    
    const { signed, loading } = useAuth();

    if( loading ) {
        return <Loading />
    }

    return signed ? <PrivateRoutes /> : <PublicRoutes />;
}

export default Routes;