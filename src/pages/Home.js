import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="my-20">
            <p>This is Home for {user?.email}</p>
        </div>
    );
};

export default Home;
