import React, { useContext, useEffect, useState } from 'react'
import { json, Link, useNavigate, useNavigation } from 'react-router-dom'
import loginImage from '../../../src/assets/image/logIn/login13.png';
import loginImage2 from '../../../src/assets/image/logIn/login1-removebg-preview.png';
import loginImage3 from '../../../src/assets/image/logIn/login3-removebg-preview.png';
import Swal from 'sweetalert2';
import { AuthContext, authContext } from '../../Provider/AuthProvider';
// import { createContext } from 'react';
import './SignUp.css';
import { linkWithCredential } from 'firebase/auth';


const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const Swal = require('sweetalert2')
    const handleSignUp = event => {



        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password }
        console.log('signUp user data ', user);




        createUser(email, password, name)

            .then(result => {
                const user = result?.user;
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name, // Ensure inputName has the value
                        user: user
                    }),
                   
                }, )
                    .then(res => res.json())
                    .then(data => {
                        console.log('created user data',data);
                    })

                    .catch(error => {
                        console.error(error);
                    })
                //    .catch(error => {
                //     console.error(error);
                //    })
                form.reset();
                Swal.fire({
                    title: 'SignUp Successfully',
                    
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/')
            })


    }
    // const handleSignUp = async (event) => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const user = { name, email, password };

    //     console.log('signUp user data ', user);

    //     try {
    //         // Create user in authentication system
    //         const createdUser = await createUser(email, password);

    //         // Make API call to save user in the database
    //         const response = await fetch("http://localhost:5000/dashboard/users", {
    //             method: "POST",  // Change to "PUT" if updating
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(createdUser)
    //         });

    //         // if (!response.ok) {
    //         //     throw new Error(`HTTP error! Status: ${response.status}`);
    //         // }

    //         const data = await response.json();
    //         console.log("Server Response:", data);
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };
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
                <div className=" w-1/3
                 text-center  lg:text-left" style={{ position: "relative" }}>

                    <img style={{
                        width: "100%",
                        height: "100%", transition: "transform 0.1s ease-out",
                        ...parallaxStyle
                    }} className='signUpImage' src={loginImage} alt=''></img>


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