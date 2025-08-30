import React from "react";
import { Utensils } from "lucide-react";

const HeroTransactions = () => {
    const transactions = [
        {
            id: 1,
            user: "Alice",
            item: "Pizza",
            amount: "$25",
            category: "Food",
            time: "Today, 10:15 AM",
        },
        {
            id: 2,
            user: "Bob",
            item: "Burgers",
            amount: "$40",
            category: "Food",
            time: "Today, 01:45 PM",
        },
        {
            id: 3,
            user: "Charlie",
            item: "Coffee",
            amount: "$10",
            category: "Food",
            time: "Today, 05:20 PM",
        },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 my-10 w-full">
            <h2 className="text-lg p-semibold text-gray-700 mb-4">Recent Food Transactions</h2>

            <ul className="space-y-4">
                {transactions.map((tx) => (
                    <li
                        key={tx.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all"
                    >
                        {/* Left side with avatar + details */}
                        <div className="flex items-center gap-4">
                            {/* Avatar */}
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center p-semibold text-indigo-600">
                                {tx.user.charAt(0)}
                            </div>

                            <div>
                                <p className="text-gray-700 p-medium">
                                    {tx.user} <span className="text-gray-500 text-sm">bought {tx.item}</span>
                                </p>
                                <p className="text-sm text-gray-500 p-regular">{tx.time}</p>
                            </div>
                        </div>

                        {/* Right side with category + amount */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-md p-regular">
                                <Utensils size={14} />
                                {tx.category}
                            </div>
                            <span className="p-semibold text-green-600">{tx.amount}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeroTransactions;
