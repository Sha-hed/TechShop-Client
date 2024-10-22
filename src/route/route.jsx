import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../shared/Signin";
import SignUp from "../shared/SignUp";
import Admin from "../pages/Admin/Admin"
import ViewAllProduct from '../pages/Admin/ViewAllProduct'
import AddProduct from '../pages/Admin/AddProduct'
import UpdateProduct from '../pages/Admin/UpdateProduct'
import CategoryWiseShow from "../components/CategoryWiseShow";
import PCard4 from "../components/PCard4";
import SearchProduct from "../components/SearchProduct";
import PrivateRoute from "./PrivateRoute";
import CartProduct from "../pages/Admin/CartProduct";
import FrontPage from "../pages/Home/FrontPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        index: true,
                        element: <FrontPage />
                    },
                    {
                        path: '/categoryWiseShow/:category',
                        element: <CategoryWiseShow />,
                        loader: ({ params }) => fetch(`https://techshop-seven.vercel.app/singleCategoryData/${params.category}`)
                    },
                    {
                        path: '/singleProductLoad/:id',
                        element: <PCard4 />,
                        loader: ({ params }) => fetch(`https://techshop-seven.vercel.app/singlePro/${params.id}`)
                    },
                    {
                        path: '/searchProduct',
                        element: <SearchProduct />
                    },
                    {
                        path: '/cartProduct/:email',
                        element: <PrivateRoute><CartProduct /></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://techshop-seven.vercel.app/getCartItem/${params.email}`)
                    }
                ]
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Admin /></PrivateRoute>,
                children: [
                    {
                        index: true,
                        element: <PrivateRoute><ViewAllProduct /></PrivateRoute>
                    },
                    {
                        path: 'add',
                        element: <PrivateRoute><AddProduct /></PrivateRoute>
                    },
                    {
                        path: 'viewAll',
                        element: <PrivateRoute><ViewAllProduct /></PrivateRoute>
                    },
                    {
                        path: 'updateProduct/:id',
                        element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://techshop-seven.vercel.app/singlePro/${params.id}`)
                    }
                ]
            }
        ]
    },
]);