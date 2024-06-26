import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.svg';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {


      const { user, logOut } = useContext(AuthContext)

      const links = <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            
      
      </>



      const handleLogOut = () => {
            logOut();
      }
      return (
            <div className="navbar bg-base-100">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {links}
                              </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost text-xl w-24 h-16">
                              <img src={logo} alt="" />
                        </Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-4">
                              {links}
                        </ul>
                  </div>
                  <div className="navbar-end">
                        {
                              user ? <>
                                    
                                    <li><NavLink to='/bookings' className='btn mr-4'>My Booking</NavLink></li>
                                    <li onClick={handleLogOut} className='btn mr-4'>logout</li>
                              </>
                                    :
                                    <li><NavLink to='/login' className='btn mr-4'>login</NavLink></li>
                        }
                       <button className="btn btn-outline btn-warning">Appointment</button>
                  </div>
            </div>
      );
};

export default Navbar;