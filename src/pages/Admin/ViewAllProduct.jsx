import { useQuery } from "@tanstack/react-query";
// import useAxiosGeneral from "../../../hooks/useAxiosGeneral";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
const ViewAllProduct = () => {

    // const axiosGeneral = useAxiosGeneral()
    const axiosFetch = useAxios()
    const { data: products = [], refetch } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const { data } = await axiosFetch.get('/sobai')
            return data;
        }
    })
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosFetch.delete(`/delProduct/${id}`)
                // console.log(data)
                if (data.deletedCount) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Product has been deleted.",
                        icon: "success"
                    });
                    refetch()
                }
            }
        });
    }

    return (
        <div>
            <h1 className="text-center text-2xl font-semibold mb-5 underline">All Product</h1>
            <div className="overflow-x-auto border">
                <table className="table border">
                    {/* head */}
                    <thead className="border py-5 border-b-2 text-orange-500 text-lg shadow bg-gray-200">
                        <tr className="text-center">
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="border text-center">
                        {/* row 1 */}
                        {/* <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr> */}

                        {
                            products?.map(({ _id, productName, productCategory, productPrice }, id) => <tr key={id}>
                                <td>{id + 1}</td>
                                <td className="w-[200px]">{productName}</td>
                                <td className="w-[200px]">{productCategory}</td>
                                <td className="w-[200px] text-red-600 font-bold">TK. {productPrice}</td>
                                <td className="flex justify-center space-x-5">
                                    <Link to={`/dashboard/updateProduct/${_id}`}  className="text-green-700 text-2xl"><FaEdit /></Link>
                                    <button onClick={() => handleDelete(_id)} className="text-red-700 text-2xl"><MdDeleteForever /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewAllProduct;