// import { useContext } from "react";
// import { AuthContext } from "../route/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import profile from '../assets/images/boy.png';
// import shopLogo from '../assets/images/ShopLogo.png'
import TechLogo from '../assets/images/TechLogo.png'
import { IoSearch } from "react-icons/io5";
import { useRef, useState } from 'react';
// import IsAdmin from "../hooks/IsAdmin";
import { FaCartArrowDown } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import IsAdmin from "../hooks/IsAdmin";
const Navbar = () => {


    const [isAdmin] = IsAdmin();
    // const [searchText, setSearchText] = useState('')
    const navigate = useNavigate()

    const searchRef = useRef()

    // console.log('Admin Check ', isAdmin)
    // const { user, logOut } = useContext(AuthContext);
    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                setOpen(!open)
            })
            .catch(() => {

            })
    }
    const [open, setOpen] = useState(false);

    const handleSearchFeature = () => {
        let searched = searchRef.current.value
        navigate('/searchProduct', { state: { searched } })

        // console.log('Search Value :', searchRef.current.value)
        // console.log(searchText)
    }

    return (
        <div className="navbar px-1 lg:px-32 shadow-xl py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to={'/'} className="font-bold hover:bg-gray-400 p-2 rounded-xl">Home</NavLink>
                        <NavLink to={'/login'} className="font-bold my-2 hover:bg-gray-400 p-2 rounded-xl">SignIn</NavLink>
                    </ul>
                </div>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                        <img src={TechLogo} />
                    </div>
                </div>
                <a className="btn btn-ghost text-xl font-bold gap-0 uppercase">Tech<span className="text-blue-900">Shop</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul> */}
                <div className="flex">
                    <input ref={searchRef} className="border border-gray-300 w-[350px] p-4 rounded-l-full outline-none" type="text" name="search" id="" placeholder="Search by product name" />
                    <button onClick={handleSearchFeature} className="bg-[#247cc6] text-white font-bold px-10 rounded-r-full"><IoSearch className="text-3xl" /></button>
                </div>
            </div>
            <div className="navbar-end">
                {
                    user && !isAdmin && <Link to={`/cartProduct/${user?.email}`}><FaCartArrowDown className="text-4xl mr-10" /></Link>
                }
                {
                    user ? <div className="relative flex space-x-4">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                <img onClick={() => setOpen(!open)} src={profile} />
                            </div>
                        </div>
                        {
                            isAdmin ? (<div className={`${open ? 'visible' : 'invisible'} absolute top-12 -left-32 bg-white w-[150px] p-3 rounded shadow-xl border border-black`}>
                                <Link to={'/dashboard'} className="list-none cursor-pointer hover:bg-gray-300 hover:px-2 font-semibold">Dashboard</Link>
                                <li onClick={handleLogOut} className="list-none cursor-pointer hover:bg-gray-300 hover:px-2 font-semibold">Logout</li>
                            </div>) : (<div className={`${open ? 'visible' : 'invisible'} absolute top-12 -left-32 bg-white w-[150px] p-3 rounded shadow-xl border border-black`}>
                                {/* <li className="list-none cursor-pointer hover:bg-gray-300 hover:px-2 font-semibold">Cart</li> */}
                                <li onClick={handleLogOut} className="list-none cursor-pointer hover:bg-gray-300 hover:px-2 font-semibold">Logout</li>
                            </div>)
                        }
                        {/* <button onClick={handleLogOut} className="p-2 bg-[#247cc6] px-5 text-white font-bold rounded">Sign Out</button> */}
                    </div> : <Link to={`/signIn`} className="p-2 bg-[#247cc6] px-5 text-white font-bold rounded">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;

