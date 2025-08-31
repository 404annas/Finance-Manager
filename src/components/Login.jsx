import React, { useEffect, useState } from 'react'
import { UserRound, Mail, Lock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { toast } from "sonner";

const Login = () => {
    const [state, setState] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);

    const { setUser, setToken, setShowUserLogin } = useAppContext();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = state === "register" ? "register" : "login";

            let res;
            if (state === "register") {
                const formData = new FormData();
                formData.append("name", name);
                formData.append("email", email);
                formData.append("password", password);
                if (image) formData.append("image", image);

                res = await fetch(`http://localhost:8080/api/auth/${endpoint}`, {
                    method: "POST",
                    body: formData,
                });
            } else {
                res = await fetch(`http://localhost:8080/api/auth/${endpoint}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                });
            }

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Something went wrong");
                return;
            }

            toast.success(state === "register" ? "Account created successfully!" : "Login successful!");
            setUser(data.user);
            setToken(data.token);

            localStorage.setItem('token', data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            setShowUserLogin(false);

        } catch (err) {
            console.error(err);
            toast.error("Server error, please try again later.");
        }
    };


    return (
        <div onClick={() => setShowUserLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50'>
            <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[450px] text-gray-700 rounded-2xl shadow-xl border border-purple-100 bg-purple-50">
                <p className="text-2xl p-medium m-auto">
                    <span className="text-[#5556cc]">User</span> {state === "login" ? "Login" : "Sign Up"}
                </p>
                {state === "register" && (
                    <>
                        <div className="w-full p-regular">
                            <p>Profile Image (optional)</p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="mt-2 border border-[#5556cc] w-full p-2 rounded"
                            />
                        </div>
                        <div className="w-full p-regular">
                            <p>Name</p>
                            <div className='flex items-center gap-1 border border-[#5556cc] rounded w-full p-2 mt-1'>
                                <p><UserRound size={15} className='text-[#5556cc]' /></p>
                                <input onChange={(e) => setName(e.target.value)} value={name} placeholder="John Doe" className="outline-none" type="text" required />
                            </div>
                        </div>
                    </>
                )}
                <div className="w-full p-regular">
                    <p>Email</p>
                    <div className='flex items-center gap-2 border border-[#5556cc] rounded w-full p-2 mt-1'>
                        <p><Mail size={15} className='text-[#5556cc]' /></p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="johndoe@gmail.com" className="outline-none" type="email" required />
                    </div>
                </div>
                <div className="w-full p-regular">
                    <p>Password</p>
                    <div className='flex items-center gap-2 border border-[#5556cc] rounded w-full p-2 mt-1'>
                        <p><Lock size={15} className='text-[#5556cc]' /></p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password_123" className="outline-none" type="password" required />
                    </div>
                </div>
                {state === "register" ? (
                    <p className='p-regular'>
                        Already have account? <span onClick={() => setState("login")} className="text-[#5556cc] cursor-pointer p-regular">click here</span>
                    </p>
                ) : (
                    <p className='p-regular'>
                        Create an account? <span onClick={() => setState("register")} className="text-[#5556cc] cursor-pointer p-regular">click here</span>
                    </p>
                )}
                <button className="bg-[#5556cc] hover:bg-[#4445bb] transition-all text-white w-full py-2 rounded-md cursor-pointer p-regular">
                    {state === "register" ? "Create Account" : "Login"}
                </button>
            </form>
        </div>
    );
}

export default Login;
