import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import MenuCategories from "./MenuCategories";

const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null)
  const { resID } = useParams();

  const resInfo = useRestaurantInfo(resID); //custom hook

  const [showIndex, setShowIndex] = useState(null);
  // console.log(resInfo)
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards, title } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (categoryCard) => {
        return (
          categoryCard?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          categoryCard?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
      }
    );
  // console.log(categories)
  return (
    <div className="m-3 text-center">
      <h1 className="text-5xl px-5 py-2 text-green-600">{name}</h1>
      <h2 className="text-3xl px-5 py-2 text-blue-600">{cuisines}</h2>
      <h2 className="text-3xl px-5 py-1  text-red-500">
        {costForTwoMessage} • {avgRating}
      </h2>
      {categories.map((category,index) => (
        //controlled component
        <MenuCategories
          key={category.card.card.categoryId}
          categoryData={category}
          showItems= {index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
