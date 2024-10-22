import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
const PCard4 = () => {
    // const { user } = useContext(AuthContext)
    // const axiosGeneral = useAxiosGeneral()
    const { user } = useAuth();
    const axiosFetch = useAxios()
    const product = useLoaderData();
    const { _id, productName, productCategory, productPrice, productImage, productDetails } = product
    // console.log('From Product Details Page!! ', product)
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate()

    const handleAddToCard = async () => {
        if (!user) {
            return setOpenModal(true)
        }
        const cart = {
            email: user?.email, productId: _id,
            productName, productImage, productPrice
        }
        const { data } = await axiosFetch.post('/addToCart', cart)
        // console.log(data)
        if (data.insertedId) {
            toast.success('Product Added to Cart Successfully')
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }


    return (
        <>
            <div className="mx-auto flex w-72 items-center justify-center">
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-80 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <svg className="w-16 stroke-rose-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path opacity="0.4" d="M12 7.75V13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity="0.4" d="M12 16.2002V16.3002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                            <h6 className="text-center text-sm font-medium opacity-70">To add this product to your cart, you must be logged in to your account.</h6>
                            <div className='flex gap-2'>
                                <Link to={'/login'} className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white">
                                    Login now
                                </Link>
                                <button onClick={() => setOpenModal(false)} className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white">
                                    Not Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="h-[100px] flex justify-center items-center border bg-gray-100 shadow">
                    <h1 className="text-3xl">{productCategory}</h1>
                </div>
                <div className="flex flex-col my-10 gap-5 w-1/2 mx-auto">
                    <div className="w-full border">
                        <img src={productImage} alt="" />
                    </div>
                    <div className="w-full border flex flex-col space-y-3 p-3">
                        <h1 className="text-3xl font-medium">{productName}</h1>
                        <p>{productDetails}</p>
                        <h1 className="text-orange-500 text-3xl font-bold">TK. {productPrice}</h1>
                        <div className="w-[300px]">
                            <button onClick={handleAddToCard} className="rounded flex justify-center items-center gap-5 bg-orange-400 text-white px-5 py-2 font-bold"><IoCartOutline /> Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PCard4;