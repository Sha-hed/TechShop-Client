import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import CatCard from '../../components/CatCard'

const FrontPage = () => {
    // const axiosGeneral = useAxiosGeneral()
    const axiosFetch = useAxios()
    const { data: categories = [] } = useQuery({
        queryKey: ['cateData'],
        queryFn: async () => {
            const { data } = await axiosFetch.get('/getHomePageProduct')
            return data;
        }
    })
    return (
        <div>
            <div className="">
                {
                    categories?.map((data, id) => <CatCard key={id} data={data}></CatCard>)
                }
            </div>
        </div>
    );
};

export default FrontPage;