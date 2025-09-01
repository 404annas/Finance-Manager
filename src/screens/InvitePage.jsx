// src/screens/InvitePage.jsx
import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const InvitePage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { setShowUserLogin } = useAppContext();

    useEffect(() => {
        const token = searchParams.get("token");
        const email = searchParams.get("email"); // optional if backend included email

        if (!token) {
            // no token — go home or show error
            navigate("/", { replace: true });
            return;
        }

        // Save token + mode so your Login modal reads them on mount
        localStorage.setItem("inviteToken", token);
        localStorage.setItem("inviteMode", "register");
        if (email) localStorage.setItem("inviteEmail", email);

        // Open the modal and go to home route where modal is rendered
        setShowUserLogin(true);
        navigate("/", { replace: true });

        // (No cleanup here; Login will clear these upon successful register)
    }, [searchParams, navigate, setShowUserLogin]);

    // optionally render a loading message while we redirect
    return (
        <div className="min-h-screen flex items-center justify-center">
            <p>Processing invite... redirecting to sign up...</p>
        </div>
    );
};

export default InvitePage;
