import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex items-center justify-between lg:px-20">
                <div>
                    <Link
                        to={`/`}
                        className="btn btn-ghost normal-case text-xl"
                    >
                        AwsomeAUTH
                    </Link>
                </div>
                <div className="space-x-6 font-semibold">
                    <Link to={`/home`}>Home</Link>
                    <Link to={`/signin`}>Sign In</Link>
                    <Link to={`/signup`}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
