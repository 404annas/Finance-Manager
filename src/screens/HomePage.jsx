import React from 'react';
import Sidebar from '../components/Sidebar';
import HeroNav from '../components/HeroNav';

const HomePage = () => {
  return (
    <div className='flex items-center bg-white h-screen'>
      <Sidebar />
      <HeroNav />
    </div>
  );
};

export default HomePage;
