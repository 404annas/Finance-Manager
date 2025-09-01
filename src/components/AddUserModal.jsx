import React, { useState } from "react";
import { Plus, Send } from "lucide-react";

const AddUser = () => {
    const [emails, setEmails] = useState([""]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Handle input change
    const handleInputChange = (index, value) => {
        const updatedEmails = [...emails];
        updatedEmails[index] = value;
        setEmails(updatedEmails);
    };

    // Add new email field
    const addEmailField = () => {
        setEmails([...emails, ""]);
    };

    // Send invites
    const sendInvites = async () => {
        setLoading(true);
        setMessage("");

        try {
            for (let email of emails) {
                if (!email) continue;

                const res = await fetch("http://localhost:8080/api/invite", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                });

                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message || "Failed to send invite");
                }
            }

            setMessage("✅ Invites sent successfully!");
            setEmails([""]); // reset
        } catch (error) {
            console.error(error.message);
            setMessage("❌ Error sending invites");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-gray-50 shadow-md rounded-2xl px-6 py-12 border border-gray-100">
            {/* Heading */}
            <h2 className="text-2xl p-semibold text-[#6667DD] text-center mb-6">
                Add Users into your Finance
            </h2>

            {/* Email Fields */}
            <div className="space-y-4">
                {emails.map((email, index) => (
                    <input
                        key={index}
                        type="email"
                        placeholder="Enter user email"
                        value={email}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        className="w-full px-4 py-3 rounded-xl p-regular outline-none border-2 border-[#6667DD]"
                    />
                ))}
            </div>

            {/* Add More Button */}
            <button
                onClick={addEmailField}
                className="flex items-center gap-2 text-[#6667DD] p-medium mt-4 hover:text-[#4c4eaa] transition-all duration-300 cursor-pointer"
            >
                <Plus className="w-5 h-5" />
                Add another email
            </button>

            {/* Send Invite */}
            <button
                onClick={sendInvites}
                disabled={loading}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-[#6667DD] hover:bg-[#4c4eaa] text-white py-3 rounded-xl p-semibold transition-all duration-300 cursor-pointer disabled:opacity-50"
            >
                <Send className="w-5 h-5" />
                {loading ? "Sending..." : "Send Invite"}
            </button>

            {/* Message */}
            {message && (
                <p className="mt-4 text-center text-sm text-gray-700 p-regular">{message}</p>
            )}
        </div>
    );
};

export default AddUser;
