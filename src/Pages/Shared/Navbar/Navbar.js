import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-yellow-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-600 rounded-box w-52">
                            <li><Link className='text-white font-bold text-lg'>Home</Link></li>
                            <li><Link className='text-white font-bold text-lg'>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-3xl font-bold italic text-white">🛵 Gari <span className='text-emerald-300'>Kino</span><span className='text-white text-2xl'>.com</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex text-white">
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-white text-xl font-bold'><Link>Home</Link></li>
                        <li><Link className='text-white text-xl font-bold'>Item 3</Link></li>
                        <li><Link to='/blogs' className='text-white text-xl font-bold'>Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;