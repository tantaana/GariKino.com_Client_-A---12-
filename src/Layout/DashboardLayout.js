import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.photoURL);
    const [isSeller] = useSeller(user?.photoURL);
    const [isBuyer] = useBuyer(user?.photoURL);



    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile mt-10">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    <div className='flex justify-center'>
                        <label htmlFor="my-drawer-2" className="btn btn-primary btn-outline w-1/2 drawer-button lg:hidden font-bold ">Dashboard</label>
                    </div>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-yellow-600">
                        {isSeller &&
                            <>
                                <li><Link to='/dashboard/addproduct' className='text-xl font-bold text-white'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myproduct' className='text-xl font-bold text-white'>My Products</Link></li>
                            </>}
                        {isBuyer &&
                            <>
                                <li><Link to='/dashboard/myorders' className='text-xl font-bold text-white'>My Orders</Link></li>
                            </>}
                        {isAdmin &&
                            <>
                                <li><Link to='/dashboard/allsellers' className='text-xl font-bold text-white'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers' className='text-xl font-bold text-white'>All Buyers</Link></li>
                            </>}




                    </ul>

                </div>


            </div>
        </div >
    );
};

export default DashboardLayout;