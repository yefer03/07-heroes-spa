
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';


export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    const { pathName, search } = useLocation();

    const lastPath = pathName + search;
    localStorage.setItem( 'lastPath', lastPath );
    
    return (logged)
        ? children
        : <Navigate to="/login" />
};
