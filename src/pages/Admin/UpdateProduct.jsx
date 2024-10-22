import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";


const UpdateProduct = () => {

    const product = useLoaderData()
    const { _id, productName, productPrice, productCategory, productQuantity, productImage, productDetails } = product
    const axiosFetch = useAxios()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const productName = e.target.productName.value
        const productPrice = parseInt(e.target.productPrice.value)
        const productCategory = e.target.category.value
        const productQuantity = e.target.productQuantity.value
        const productImage = e.target.productImage.value
        const productDetails = e.target.productDetails.value
        const product = { productName, productPrice, productCategory, productQuantity, productImage, productDetails }
        const { data } = await axiosFetch.patch(`/updateProduct/${_id}`, product)
        // console.log(data)
        if (data.modifiedCount) {
            toast.success('Product updated Successfully')
            setTimeout(() => {
                navigate('/dashboard/viewAll')
            }, 2000)
        }
    }
    return (
        <div>
            <h1 className="text-center font-bold underline text-xl mb-4">Update Product</h1>
            <div className="w-[800px] p-5 mx-auto shadow-xl border">
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-5 w-full">
                        <div className="flex flex-col gap-2 w-1/2">
                            <label className="font-semibold" htmlFor="">ProductName</label>
                            <input defaultValue={productName} className="p-3 bg-gray-100 border border" placeholder="Product Name" type="text" name="productName" id="" />
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <label className="font-semibold" htmlFor="">ProductPrice</label>
                            <input defaultValue={productPrice} className="p-3 bg-gray-100 border" placeholder="Product Price" type="number" name="productPrice" id="" />
                        </div>
                    </div>
                    <div className="flex gap-5 w-full">
                        <div className="flex flex-col w-1/2 gap-2">
                            <label className="font-semibold" htmlFor="">Category</label>
                            <select defaultValue={productCategory} className="p-3 bg-gray-100 border" name="category" id="">
                                <option value="">Select a category</option>
                                <option value="Accessories">Accessories </option>
                                <option value="Basic Component">Basic Component </option>
                                <option value="Development Board">Development Board </option>
                                <option value="Display">Display</option>
                                <option value="General IC">General IC</option>
                                <option value="Home Automation">Home Automation</option>
                                <option value="Kits">Kits</option>
                                <option value="Microcontroller">Microcontroller</option>
                                <option value="Misscellaneous">Misscellaneous</option>
                                <option value="Robotic">Robotic</option>
                                <option value="Sensor">Sensor</option>
                                <option value="Wireless">Wireless </option>
                            </select>
                        </div>
                        <div className="flex flex-col w-1/2 gap-2">
                            <label className="font-semibold" htmlFor="">Product Quantity</label>
                            <input defaultValue={productQuantity} className="p-3 bg-gray-100 border" placeholder="Product Quantity" type="number" name="productQuantity" id="" />
                        </div>
                    </div>
                    <div className="flex gap-5 w-full">
                        <div className="flex flex-col w-1/2 gap-2">
                            <label className="font-semibold" htmlFor="">Product Image</label>
                            <input defaultValue={productImage} className="p-3 bg-gray-100 border" placeholder="Product image URL" type="text" name="productImage" id="" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="font-semibold" htmlFor="">Product Details</label>
                        <textarea defaultValue={productDetails} rows={3} className="p-3 bg-gray-100 border" name="productDetails" id="" placeholder="productDetails"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button className="mt-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" type="submit">Update Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;