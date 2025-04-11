import React, { useContext, useEffect, useRef, useState } from 'react';
import loginImage from '../../../src/assets/image/logIn/logIn10-removebg-preview.png';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import './LogIn.css';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import FadeInOnScroll from '../../ScrollEffects/FadeInOnScroll';

const LogIn = () => {

    const {signIn} = useContext(AuthContext);
     const navigate = useNavigate();
        const Swal = require('sweetalert2')
     // =====================================================
        // State to store mouse position
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
      const handleLogin = event =>{
        const form = event.target;
      
        const email = form.email.value;
        const password = form.password.value;
       
       
        signIn(email, password)
        .then(result =>{
            console.log(result.user.email);
            // const user = {email : email};
            // axios.post('http://localhost:5000/jwt', user,{withCredentials: true})
            
            // .then(res =>{
            //     console.log('jwt token user post axios', res.data);
            // })

            
        })
        form.reset();
            Swal.fire({
                title: 'LoIn Successfully',
                
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            navigate('/')
       
      }
    
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
        <div className="hero bg-base-200 min-h-screen text-white logInBgSetUp rounded-3xl">
        <div className="hero-content flex-col lg:flex-row overlayLogIn">
        <FadeInOnScroll direction='left' className=" w-1/2
                 text-center  lg:text-left" style={{ position: "relative" }}>
                    
                    <img style={{
          width: "100%",
          height: "100%", transition: "transform 0.1s ease-out",
          ...parallaxStyle}} className='signUpImage' src={loginImage} alt=''></img>
                   
                    
                </FadeInOnScroll>
            <FadeInOnScroll direction='right' className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">LogIn!</h1>
                <form className="card-body" onSubmit={handleLogin}>
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
                            <Link to='/'>Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent text-white">LogIn</button>
                        
                    </div>
                </form>
            </FadeInOnScroll>
        </div>
    </div>
    );
};

export default LogIn;