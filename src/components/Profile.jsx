import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { CircleDollarSign } from 'lucide-react';

const Profile = () => {
    const navigate = useNavigate();
    const { user } = useAppContext();

    // const user = {
    //     name: "John Doe",
    //     email: "johndoe@example.com",
    //     image:
    //         "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=faces",
    // };

    return (
        <section className="w-4/5 h-screen mx-auto flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="flex flex-col items-center gap-6">
                {/* Profile Image */}
                <div className="relative">
                    <img
                        src={user.image}
                        alt="profile"
                        className="w-40 h-40 rounded-full object-cover border-4 border-gray-700 shadow-xl"
                    />
                    <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-2 border-gray-900"></span>
                </div>

                {/* User Info */}
                <div className="text-center">
                    <h1 className="text-3xl p-bold tracking-wide">{user.name}</h1>
                    <p className="text-gray-400 mt-2 p-regular">{user.email}</p>

                    {/* Edit Profile Button */}
                    <div className="flex items-center justify-center gap-2 mt-6 px-6 py-2 rounded-xl bg-[#5556cc] hover:bg-[#3b3c97] transition-all duration-300 shadow-md p-medium cursor-pointer text-sm" onClick={() => { navigate("/") }}>
                        <p><CircleDollarSign size={18}/></p>
                        <p>Add Balance</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
