import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-gray-100 mb-20">
            <div className="card flex-shrink-0 w-1/4  shadow-2xl bg-base-100 sm:p-0">
                <h2 className='text-3xl font-bold text-center p-3'>Login</h2>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to='register' href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;