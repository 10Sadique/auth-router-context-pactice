import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {})
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <div className="flex items-center justify-between navbar bg-primary text-primary-content lg:px-20">
                <div>
                    <Link
                        to={`/`}
                        className="text-xl normal-case btn btn-ghost"
                    >
                        AwsomeAUTH
                    </Link>
                </div>
                {user?.email && <span>Welcome, {user?.email}</span>}
                <div className="space-x-6 font-semibold">
                    <Link to={`/home`}>Home</Link>
                    <Link to={`/orders`}>Orders</Link>

                    <Link to={`/signup`}>Sign Up</Link>
                    {user?.email ? (
                        <button
                            onClick={handleSignOut}
                            className="normal-case btn"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <Link to={`/signin`}>
                            <button className="normal-case btn">Sign In</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
