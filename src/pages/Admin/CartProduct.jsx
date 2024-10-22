import { useLoaderData } from "react-router-dom";
import CartItems from "../../components/CartItems";


const CartProduct = () => {
    const products = useLoaderData();
    return (
        <div>
            <div className="h-[100px] flex justify-center items-center border bg-gray-100 shadow">
                <h1 className="text-3xl">Saved Items</h1>
            </div>
            <div>
                {
                    products.length > 0 ? (<div className="flex flex-col gap-y-5 mt-10">
                        {
                            products?.map((card, id) => <CartItems key={id} card={card} />)
                        }
                    </div>) : <>
                        <div className="flex justify-center items-center h-[300px]">
                            <h1 className="text-red-600 text-2xl font-semibold">No items saved in your cart.</h1>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default CartProduct;