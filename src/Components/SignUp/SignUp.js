import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../../../src/assets/image/logIn/logIn10-removebg-preview.png';
import loginImage2 from '../../../src/assets/image/logIn/login1-removebg-preview.png';
import loginImage3 from '../../../src/assets/image/logIn/login3-removebg-preview.png';

import { AuthContext, authContext } from '../../Provider/AuthProvider';
// import { createContext } from 'react';
import './SignUp.css';


const SignUp = () => {
    
   const {createUser} = useContext(AuthContext);
    const handleSignUp = event =>{

        

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log('userfound', user);
        })
        .then(error => console.log(error)
        )
        
    }
     // =====================================================
    // State to store mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Event listener to track mouse movement
  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setMousePosition({ x, y });
  };

  // Add event listener when component mounts and clean up when it unmounts
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate parallax effect based on mouse position
  const parallaxStyle = {
    transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.05}px, ${(mousePosition.y - window.innerHeight / 2) * 0.05}px)`
  };
    // =====================================================
    return (

        <div className="hero bg-base-200 min-h-screen " >
            <div className="hero-content flex-col lg:flex-row backSignUp" >
                <div className=" w-1/2
                 text-center  lg:text-left" style={{ position: "relative" }}>
                    
                    <img style={{
          width: "100%",
          height: "100%", transition: "transform 0.1s ease-out",
          ...parallaxStyle}} className='signUpImage' src={loginImage} alt=''></img>
                   
                    
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

    );
};

export default SignUp;