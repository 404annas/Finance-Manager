import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, CreditCard, History, Layers2, RefreshCcw, Users } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: <LayoutDashboard size={23} />, label: "Dashboard", path: "/" },
        { icon: <CreditCard size={23} />, label: "Payments", path: "/" },
        { icon: <Layers2 size={23} />, label: "Category", path: "/" },
        { icon: <RefreshCcw size={23} />, label: "Exchange", path: "/" },
        { icon: <History size={23} />, label: "History", path: "/" },
        { icon: <Users size={23} />, label: "Add Users", path: "/add-users"  },
    ];

    return (
        <div className="w-[20%] h-screen border-r border-gray-200 bg-white shadow-sm p-4 flex flex-col gap-2">
            <h2 className="text-xl p-semibold text-[#6667DD] mb-6">Finance Manager</h2>

            {menuItems.map((item, index) => (
                <Link
                    to={item.path}
                    key={index}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
                        ${index === 0 || index === menuItems.length - 1
                            ? "bg-purple-100 text-[#6667DD] hover:bg-purple-200 transition-all duration-300 font-medium"
                            : "text-gray-600 hover:bg-purple-100 hover:text-[#6667DD]"}
                    `}
                >
                    {item.icon}
                    <span className='p-medium'>{item.label}</span>
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
