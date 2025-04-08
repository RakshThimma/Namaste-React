import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addCart } from "../utils/cartSlice";


const ItemList = (props) => {
  const { items } = props;
  //   console.log(items);
  const dispatch = useDispatch()
  const handleAddClick =(Item) => {
      dispatch(addCart(Item));
      
  }
  return (
    <div id="showitems">
      {items.map((EachItem) => {
        // console.log(EachItem.card.info.name)
        const { name, price, description, imageId } = EachItem.card.info;
        return (
          <div data-testid="food-items" key={name} className="text-left border-b-2 py-5 border-gray-400 border-solid p-2 flex justify-between items-start">
            <div className="w-9/12 py-3">
              <p className="font-semibold text-xl">{name}</p>
              <p>₹ {price / 100}</p>
              <p>{description}</p>
            </div>
            <div className="w-3/12 flex flex-col items-center">
              <img
                src={CDN_URL + imageId}
                className="w-full p-1 rounded-md "
                alt=""
              />
              <button className="w-24 h-auto p-2 border-solid border-gray-400 border-2 text-green-700 rounded-md bg-white relative bottom-5 font-bold"
               onClick={()=>handleAddClick(EachItem)}>
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
