import React from 'react'
import { Plus, Send, TrendingUp } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Hero = () => {
    const { user, setShowUserLogin } = useAppContext();

    return (
        <div>
            <h1 className='text-[#6667DD] p-bold text-4xl'>Your Balance</h1>
            <div className='flex items-center justify-between gap-4 mt-4'>
                <h2 className='text-3xl p-bold text-gray-800'>$ 0.00  </h2>
                {user ? (
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-2 bg-[#6667DD] text-white px-4 py-3 rounded-full cursor-pointer hover:bg-[#5556cc] transition duration-300 p-regular'>
                            <p><Plus size={20} /></p>
                            <p>Add Transaction</p>
                        </div>
                        <div className='flex items-center gap-2 bg-[#6667DD] text-white px-4 py-3 rounded-full cursor-pointer hover:bg-[#5556cc] transition duration-300 p-regular'>
                            <p><Send size={16} /></p>
                            <p>Send Money</p>
                        </div>
                    </div>

                ) : (
                    <div onClick={() => setShowUserLogin(true)} className='flex items-center gap-2'>
                        <div className='flex items-center gap-2 bg-[#6667DD] text-white px-4 py-3 rounded-full cursor-pointer hover:bg-[#5556cc] transition duration-300 p-regular'>
                            <p><TrendingUp size={20} /></p>
                            <p>Get Started</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Hero