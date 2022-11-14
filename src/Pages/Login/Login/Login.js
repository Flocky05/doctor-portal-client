import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" required {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text"> forgot password</span>
                        </label>
                    </div>
                    <input className='btn btn-accent px-3 w-full' type="submit" value="Login" />
                    <div className='flex mt-3'>
                        <p className='gap-3 mr-3'>New to Doctors Portal?</p>
                        <Link to='/Register' className='text-secondary'>Create new account</Link>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default Login;