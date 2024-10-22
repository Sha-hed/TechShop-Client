import { IoIosArrowForward } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <div className="min-h-screen mb-5">
                <div className="h-[60px] bg-[#247cc6] flex justify-center items-center">
                    <Link to="/" className="bg-white w-[70px] h-[68px] flex justify-center items-center -translate-y-1 border-t-4 border-amber-500 text-amber-600 font-semibold hover:underline">Home</Link>
                </div>
                <div className="max-w-7xl mt-10 mx-auto flex gap-10">
                    <div className="border rounded-t-lg rounded-b-lg border-t-0 h-[655px]">
                        <div className="w-[250px] bg-[#1f6cab] text-white flex gap-2.5 uppercase items-center text-xl p-4 rounded-t-lg border-t-0">
                            <RiMenu2Fill className="font-bold text-2xl text-white" />
                            <h1>Categories</h1>
                        </div>
                        <Link state={{ category: "Accessories" }} to={'/categoryWiseShow/Accessories'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">Accessories <IoIosArrowForward /></Link>
                        <Link state={{ category: "Basic Component" }} to={'/categoryWiseShow/Basic Component'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">Basic Component <IoIosArrowForward /></Link>
                        <Link state={{ category: "Development Board" }} to={'/categoryWiseShow/Development Board'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">Development Board <IoIosArrowForward /></Link>
                        <Link state={{ category: "Display" }} to={'/categoryWiseShow/Display'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">Display <IoIosArrowForward /></Link>
                        <Link state={{ category: "General IC" }} to={'/categoryWiseShow/General IC'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">General IC <IoIosArrowForward /></Link>
                        <Link state={{ category: "Home Automation" }} to={'/categoryWiseShow/Home Automation'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">Home Automation <IoIosArrowForward /></Link>
                        <Link state={{ category: "Kits" }} to={'/categoryWiseShow/Kits'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">Kits <IoIosArrowForward /></Link>
                        <Link state={{ category: "Microcontroller" }} to={'/categoryWiseShow/Microcontroller'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">Microcontroller <IoIosArrowForward /></Link>
                        <Link state={{ category: "Misscellaneous" }} to={'/categoryWiseShow/Misscellaneous'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">Misscellaneous <IoIosArrowForward /></Link>
                        <Link state={{ category: "Robotic" }} to={'/categoryWiseShow/Robotic'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">Robotic <IoIosArrowForward /></Link>
                        <Link state={{ category: "Sensor" }} to={'/categoryWiseShow/Sensor'} className="cursor-pointer hover:text-blue-600 px-4 py-3 border border-b flex justify-between items-center">Sensor <IoIosArrowForward /></Link>
                        <Link state={{ category: "Wireless" }} to={'/categoryWiseShow/Wireless'} className="cursor-pointer hover:text-blue-600 px-4 py-3 flex justify-between items-center">Wireless <IoIosArrowForward /></Link>
                    </div>
                    <div className="flex-1">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;