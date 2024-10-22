import axios from "axios";


const axiosFetch = axios.create({
    baseURL: 'https://techshop-seven.vercel.app'
})

// https://techshop-seven.vercel.app
// https://techshop-seven.vercel.app

const useAxios = () => {
    return axiosFetch
};

export default useAxios;