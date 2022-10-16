import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const SignIn = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
                <div className="flex-col hero-content">
                    <div className="text-center lg:text-left">
                        <h1 className="mb-6 text-5xl font-bold">
                            Please Sign In Now!
                        </h1>
                    </div>
                    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card lg:max-w-xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Your password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <Link
                                        to={`/`}
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </Link>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                                <div className="divider">or</div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        className="flex-1 btn btn-accent"
                                    >
                                        Google
                                    </button>
                                    <button
                                        onClick={handleGoogleSignIn}
                                        className="flex-1 btn btn-secondary"
                                    >
                                        Github
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
