
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const location = useLocation();
    if (loading) {
        return <div className="w-full h-screen border-2 border-red-600 flex justify-center items-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse">

            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/signIn' state={{ from: location.pathname }}></Navigate>
};

export default PrivateRoute;