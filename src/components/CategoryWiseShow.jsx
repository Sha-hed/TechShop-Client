import { useLocation } from "react-router-dom";
import PCard3 from "./PCard3";
import { useQuery } from "@tanstack/react-query";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import useAxios from "../hooks/useAxios";

const CategoryWiseShow = () => {
    // const axiosGeneral = useAxiosGeneral()
    const axiosFetch = useAxios()
    const location = useLocation()
    const cate = location.state?.category
    const [s, setS] = useState(0)
    const [firstPage, setFirstPage] = useState(0)
    const [pag, setPag] = useState(1)

    const { data: category } = useQuery({
        queryKey: ['products', cate, s, firstPage],
        queryFn: async () => {
            const { data } = await axiosFetch.get(`/singleCategoryData/${cate}?sort=${s}&page=${firstPage}`)
            const ll = await data.result1;
            console.log('Data check ',data)
            setPag(ll)
            return data.result2;
        }
    })

    // console.log('Document Count :', pag)

    const handleSort = (event) => {
        setS(parseInt(event.target.value))
    }

    // For Pagination Concept
    let totalPage = pag;
    // console.log('Total Document Count ', totalPage)
    let n = Math.ceil(totalPage/3)
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
        <>
            <div className="h-[100px] flex justify-center items-center border bg-gray-100 shadow">
                <h1 className="text-3xl">{cate}</h1>
            </div>
            <div className="h-[100px] border bg-gray-100 shadow flex justify-between items-center px-5">
                <a href=""><TfiMenuAlt className="text-xl" /></a>
                <p className="w-[430px] text-right">(Showing {firstPage*4} to {(firstPage*4)+category?.length} of {pag} products)</p>
                <div>
                    <label htmlFor="">Sort By: </label>
                    <select onChange={handleSort} className="border border-gray-300 bg-gray-100  px-2 py-2 rounded-full" name="sorting" id="">
                        <option value="0">Any</option>
                        <option value="1">Price - Low to High</option>
                        <option value="-1">Price - High to Low</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-y-5 mt-10">
                {
                    category?.map((card, id) => <PCard3 key={id} card={card} />)
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

        </>
    );
};

export default CategoryWiseShow;