import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10 hidden lg:block'>Click on any sidebar to explore 🌞</h2>
            <h2 className='text-center text-2xl font-bold my-10 lg:hidden'>Click on Dashboard button to explore 🌞</h2>
        </div>
    );
};

export default Dashboard;