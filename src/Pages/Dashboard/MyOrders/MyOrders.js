import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='mt-10 m-4'>
            <h2 className='text-3xl font-bold mb-8'>My Orders</h2>

            <div className='mb-8'>
                <h2 className='text-lg'><span className='font-bold'>Your Name:</span> {user?.displayName}</h2>
                <h2 className='text-lg'><span className='font-bold'>Email:</span> {user?.email}</h2>
            </div>
        </div>
    );
};

export default MyOrders;