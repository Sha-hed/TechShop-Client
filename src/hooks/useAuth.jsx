import { useContext } from "react";
import { AuthContext } from "../route/AuthProvider";



const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuth;