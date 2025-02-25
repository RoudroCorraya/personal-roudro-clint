import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import './Header.css';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  
  
  
  const handleSignOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error));
  }
    return (
       
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link className='hover:bg-accent transition-all duration-500' to='/'>Home</Link></li>
              
              <li><Link className='hover:bg-accent transition-all duration-500' to='/services'>Services</Link></li>
              
              <li><Link className='hover:bg-accent transition-all duration-500' to='/projects'>Project</Link></li>
            <li><Link className='hover:bg-accent transition-all duration-500' to='/aboutme'>About me</Link></li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl text-white">RisCO .</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
         
           <ul className="menu menu-horizontal px-1 text-white">
           <li><Link className='hover:bg-accent transition-all duration-500' to='/'>Home</Link></li>
           <li><Link className='hover:bg-accent transition-all duration-500' to='/services'>Services</Link></li>
           <li><Link className='hover:bg-accent transition-all duration-500' to='/projects'>Project</Link></li>
           <li><Link className='hover:bg-accent transition-all duration-500' to='/aboutme'>About me</Link></li>
           
           <li><Link className='hover:bg-accent transition-all duration-500' to='/contact'>Contact</Link></li>
          
           
              <li><Link className='hover:bg-accent transition-all duration-500' to='/dashboard/card'>Dashboard</Link></li>
            
        
          
         </ul>
         
         
         
        
        </div>
        
        <div className="navbar-end">
          {
            user ? <><Link to='/letstalk' className="btn text-white bg-accent">Let's Talk</Link>
            <Link onClick={handleSignOut} className="btn text-white bg-red-600">SignOut</Link>
            </> : <><Link to='/signup' className="btn text-white bg-accent">Sign In</Link></>
          }
          
        </div>
      </div>
        
    )
}

export default Header;