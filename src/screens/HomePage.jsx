import React from 'react';
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <div className='flex items-center bg-white h-screen'>
      <Sidebar />
      <Hero />
    </div>
  );
};

export default HomePage;
