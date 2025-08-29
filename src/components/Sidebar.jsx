import React from 'react';
import { LayoutDashboard, CreditCard, History, Layers2, RefreshCcw, Users } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: <LayoutDashboard size={23} />, label: "Dashboard" },
        { icon: <CreditCard size={23} />, label: "Payments" },
        { icon: <Layers2 size={23} />, label: "Category" },
        { icon: <RefreshCcw size={23} />, label: "Exchange" },
        { icon: <Users size={23} />, label: "Users" },
        { icon: <History size={23} />, label: "History" },
    ];

    return (
        <div className="w-[20%] h-screen border-r border-gray-200 bg-white shadow-sm p-4 flex flex-col gap-2">
            <h2 className="text-xl p-semibold text-[#6667DD] mb-6">Finance Manager</h2>

            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
                        ${index === 0
                            ? "bg-purple-100 text-[#6667DD] font-medium"
                            : "text-gray-600 hover:bg-purple-100 hover:text-[#6667DD]"}
                    `}
                >
                    {item.icon}
                    <span className='p-medium'>{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
