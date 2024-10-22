import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth.jsx";
import useAxios from "./useAxios.jsx";

const IsAdmin = () => {
    // const { user, loading } = useContext(AuthContext)
    const { user, loading } = useAuth()
    const axiosFetch = useAxios()

    const { data: isAdmin } = useQuery({
        queryKey: ['admin'],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosFetch.get(`/adminCheck/${user?.email}`)
            return data.IsAdmin;
        }
    })

    return [isAdmin]
};

export default IsAdmin;