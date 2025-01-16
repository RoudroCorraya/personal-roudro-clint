import React from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../../../src/assets/image/logIn/login3-removebg-preview.png';

const componentName = () => {

    const handleSignUp = event =>{

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    
                    <img className='' src={loginImage} alt=''></img>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold text-center">Sign Up!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-accent text-white">SignUp</button>
                            <span className='text-accent'>already have account?<Link to='/login'>Login</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default componentName