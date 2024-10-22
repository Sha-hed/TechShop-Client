import { IoIosArrowForward } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Admin = () => {
    return (
        <div className="min-h-screen mb-5">
            <div className="h-[60px] bg-[#247cc6] flex justify-center items-center">
                <Link to="/" className="bg-white w-[70px] h-[68px] flex justify-center items-center -translate-y-1 border-t-4 border-amber-500 text-amber-600 font-semibold">Home</Link>
            </div>
            <div className="max-w-7xl mt-10 mx-auto flex gap-10">
                <div className="border rounded-t-lg rounded-b-lg border-t-0 h-[165px]">
                    <div className="w-[250px] bg-gray-200 flex gap-2.5 uppercase items-center text-xl p-4 rounded-t-lg  justify-center text-amber-600 border ">
                        <MdDashboard className="font-bold text-2xl" />
                        <h1 className="font-bold">Dashboard</h1>
                    </div>
                    <Link state={{ category: "Accessories" }} to={'/dashboard/viewAll'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">View All Product <IoIosArrowForward /></Link>
                    <Link state={{ category: "Basic Component" }} to={'/dashboard/add'} className="cursor-pointer hover:text-blue-600 px-4 py-3 flex justify-between items-center">Add Product<IoIosArrowForward /></Link>
                </div>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;