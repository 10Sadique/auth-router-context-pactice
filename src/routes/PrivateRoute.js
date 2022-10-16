import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <button className="my-20 btn btn-primary loading">loading</button>
        );
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to={`/signin`} />;
};

export default PrivateRoute;
