import React from 'react';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';

const HomePage = () => {
    return (
        <div className='flex items-center bg-white h-screen'>
            <Sidebar />
            <Profile />
        </div>
    );
};

export default HomePage;
