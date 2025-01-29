import React, { useEffect, useRef } from 'react';
// import loginImage from '../../../src/assets/image/logIn/bannerround1.png';

import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
     // ======================================
        const outerDiv2Ref = useRef(null);
    
        const innerDiv2Ref = useRef(null);
    
        useEffect(() => {
            let outerDegree = 0;
    
            let innerDegree = 0;
            const rotationSpeed = 0.5;
            const intervalTime = 10;
            const rotateouterDiv2 = () => {
                const outerDiv2 = outerDiv2Ref.current;
    
                const innerDiv2 = innerDiv2Ref.current;
                outerDegree += rotationSpeed;   // Outer div rotates by the defined speed
                innerDegree -= rotationSpeed;   // Inner div rotates in the opposite direction
    
                outerDiv2.style.transform = `rotate(${outerDegree}deg)`;
                innerDiv2.style.transform = `rotate(${innerDegree}deg)`;
            };
    
    
            const interval = setInterval(rotateouterDiv2, intervalTime);
            return () => clearInterval(interval);
    
        }, []);
        // ======================================
    return (
        <div className="hero bg-base-200 min-h-screen text-white">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                
                {/* <img className='' src={loginImage} alt=''></img> */}
                {/* ============================================= */}
                <div className="outer-div2" ref={outerDiv2Ref} style={{ transition: "transform 0.4s ease" }}>
                        <div className="inner-div2" ref={innerDiv2Ref} style={{ transition: "transform 0.4s ease" }}></div>
                    </div>

                    {/* ============================================= */}
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
                            <Link to='/'>Forgot password?</Link>
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