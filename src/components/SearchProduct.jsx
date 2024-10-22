import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
// import useAxiosGeneral from "../hooks/useAxiosGeneral";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import PCard3 from "./PCard3";
import useAxios from "../hooks/useAxios";



const SearchProduct = () => {
    const [firstPage, setFirstPage] = useState(0)
    const [pag, setPag] = useState(1)
    const location = useLocation()
    // const axiosGeneral = useAxiosGeneral()
    const axiosFetch = useAxios()
    const texted = location.state?.searched
    const { data: products = [] } = useQuery({
        queryKey: ['data', firstPage, texted],
        queryFn: async () => {
            const { data } = await axiosFetch.get(`/searchText?text=${texted}&page=${firstPage}`)
            // console.log(data)
            const ll = await data.result1;
            setPag(ll)
            // console.log('Data ashce :', data.result2)
            return data.result2
        }
    })

    // For Pagination Concept
    let totalPage = pag;
    // console.log('Total Document Count ', totalPage)
    let n = Math.ceil(totalPage / 2)
    const pages = [...Array(n).keys()]

    const handlePrev = () => {
        if (firstPage > 0) {
            setFirstPage(firstPage - 1)
        }
    }
    const handleNext = () => {
        // console.log('page number :', pages)
        // console.log('first page : ', firstPage)
        if (pages.length - 1 > firstPage) {
            setFirstPage(firstPage + 1)
        }
    }

    return (
        <div>
            <div className="h-[100px] flex justify-between items-center border bg-gray-100 shadow px-10">
                <a href=""><TfiMenuAlt className="text-xl" /></a>
                <p className="">{`(Showing ${firstPage * 2} to ${firstPage + products.length} of ${pag} products)`}</p>
            </div>
            <div>
                {
                    products?.length > 0 ? (<div className="flex flex-col gap-y-5 mt-10">
                        {
                            products?.map((card, id) => <PCard3 key={id} card={card} />)
                        }
                    </div>) : <>
                    <div className="h-[300px] flex justify-center items-center">
                        <h1 className="text-3xl text-red-600 font-semibold">No Data Found</h1>
                    </div>
                    </>
                }
            </div>
            <div className="flex justify-center my-10">
                <button onClick={handlePrev} className="py-3 px-4 border"><MdKeyboardArrowLeft className="" /></button>
                {
                    pages?.map((page, index) => <button
                        onClick={() => setFirstPage(page)}
                        key={index}
                        className={`py-3 px-5 border font-semibold ${page === firstPage ? "text-blue-600 bg-gray-100" : ''}`}
                    >
                        {page}</button>)
                }
                <button onClick={handleNext} className="py-3 px-4 border"><MdKeyboardArrowRight /></button>
            </div>
        </div>
    );
};

export default SearchProduct;

