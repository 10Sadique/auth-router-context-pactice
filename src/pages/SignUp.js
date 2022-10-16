import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const SignUp = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
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
                            Please Sign Up Now!
                        </h1>
                    </div>
                    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card lg:max-w-md bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
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
                                        to={`/signin`}
                                        className="label-text-alt link link-hover"
                                    >
                                        Already have an account?
                                    </Link>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Register
                                </button>
                                <div className="divider">or</div>
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="btn btn-accent"
                                >
                                    Google
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
