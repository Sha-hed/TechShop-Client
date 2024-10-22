import { Link } from "react-router-dom";
import ProductCard2 from "./ProductCard2";


const CatCard = ({ data }) => {
    const { _id, products } = data
    // console.log('From CatData page :', data)
    return (
        <div className="">
            <div className="flex justify-between py-2">
                <h1 className="text-3xl">{_id}</h1>
                <Link state={{category:`${_id}`}} to={`/categoryWiseShow/${_id}`} className="text-blue-600 border border-blue-600 px-2 py-1 uppercase hover:bg-blue-600 hover:text-white rounded-md">See More</Link>
            </div>
            <div className="flex gap-5 my-10">
                {
                    products?.map((product, id) => <ProductCard2 product={product} key={id} />)
                }
            </div>
        </div>
    );
};

export default CatCard;