import { Link } from "react-router-dom";


const ProductCard2 = ({ product }) => {
    const { _id, productName, productImage, productPrice } = product
    return (
        <Link  to={`/singleProductLoad/${_id}`} className="w-[240px] border-2 border-gray-200 p-3 pb-0">
            <div className="w-full object-cover object-center">
                <img src={productImage} alt="" />
            </div>
            <div className="h-[50px] flex justify-center items-center mt-10">
                <h1 className="text-center font-semibold">{productName}</h1>
            </div>
            <hr className="mt-5"/>
            <div className="h-[50px] flex items-center justify-center">
                <h1 className="text-orange-400 font-bold text-center text-xl">Tk. {productPrice}</h1>
            </div>
        </Link>
    );
};

export default ProductCard2;