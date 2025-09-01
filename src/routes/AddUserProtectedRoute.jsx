import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { toast } from "sonner";
import HomePage from "../screens/HomePage";

const AddUserProtectedRoute = ({ children }) => {
    const { user } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            toast.error("Please Create or Login Account to Invite Others");
            navigate("/", { replace: true });
        }
    }, [user, navigate]);

    if (!user) {
        return <HomePage />;
    }

    return children;
};

export default AddUserProtectedRoute;
