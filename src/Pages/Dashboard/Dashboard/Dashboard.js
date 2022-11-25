import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='mt-4'>
                <div className="drawer">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <div className="w-full navbar bg-yellow-500 rounded">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2 text-2xl font-bold">My Dashboard 📝</div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal">
                                    <li><Link to='/addproduct' className='font-bold text-blue-600'>Add A Product</Link></li>
                                    <li><Link className='font-bold text-blue-600'>Sell</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100">
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;