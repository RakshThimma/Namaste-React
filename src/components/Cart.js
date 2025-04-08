import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
const Cart = () => {
    const dispatch = useDispatch()
    const handleClearCart = () => {
            dispatch(clearCart())
    }
  // subscribing to the store using a Selector (redux) - a hook
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems.index)
  return (
    <div className="text-center m-3 ">
      <h1 className="text-3xl font-semibold">Cart</h1>
      <button onClick={() => handleClearCart()} className="bg-black p-2 m-2 text-white rounded-lg">Clear Cart</button>
      {cartItems.length === 0 && (<h1>Your Cart is Empty !!</h1>)}
      <div className="w-5/12 m-auto">
        <ItemList  items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
