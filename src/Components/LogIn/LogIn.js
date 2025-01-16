import React from 'react';
import loginImage from '../../../src/assets/image/logIn/login3-removebg-preview.png';

const LogIn = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                
                <img className='' src={loginImage} alt=''></img>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">LogIn!</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent text-white">LogIn</button>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default LogIn;