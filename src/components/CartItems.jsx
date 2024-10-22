
import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";

const CartItems = ({ card }) => {
    const { productId, productName, productImage, productPrice } = card
    return (
        <div>
            <div className="flex border p-5 bg-gray-50 shadow">
                <Link to={`/singleProductLoad/${productId}`} className="w-60">
                    <img src={productImage} alt="" />
                </Link>
                <div className="flex-1 flex flex-col justify-center space-y-5 ml-5">
                    <Link to={`/singleProductLoad/${productId}`} className="text-xl font-medium">{productName}</Link>
                    <Link to={`/singleProductLoad/${productId}`} className="text-xl text-orange-500 font-medium">TK. {productPrice}</Link>
                </div>
                <div className="flex justify-center items-center mr-20">
                    <Link to={`/singleProductLoad/${productId}`} className="flex items-center text-slate-500 text-xl font-medium"><BiDetail className="text-2xl mr-3 font-medium text-slate-500" />View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CartItems;