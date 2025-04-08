import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [restaurantsList, setrestaurantsList] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    },[])

    const fetchData =async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9252007&lng=78.1197754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setrestaurantsList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
     const EnhancedRestaurantCard = withPromotedLabel(RestaurantCard);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return (
            <h1>Looks like you're offline. Please check your Internet connection.</h1>
        )
    }

    return restaurantsList.length=== 0 ? <Shimmer/> : (
        <div className="m-3">
            <div className="filter flex justify-start gap-9 m-4">
                <div className="search-box border-2 border-solid border-black">
                    <input className="border-2 p-2 focus:outline-none w-72" type="text" data-testid="search_input" name="" id="" placeholder="search..." value={searchText} onChange={(e)=> setsearchText(e.target.value)}/>
                    <button className="btn-search bg-black text-white p-2 border-2 border-solid border-black" onClick={()=> {
                        // console.log(searchText);
                         const filteredRes = restaurantsList.filter((res)=>{
                            if(((res.info.name.toLowerCase())).includes((searchText.toLowerCase()))){
                            return true;
                        };
                        })
                        setfilteredRestaurant(filteredRes)
                    }}>search</button>
                </div>
                <button className="filter-btn bg-yellow-200 border-orange-300 border-solid border-2 p-2 hover:bg-white" onClick={() => {
                    const TopRatedRes = restaurantsList.filter((EachRestaurant) => EachRestaurant.info.avgRating >= 4.5);
                    setfilteredRestaurant(TopRatedRes)
                }}>Top Rated Restaurants</button>
            </div>
            {/* //promoted */}
            <div className="res-card-container flex flex-wrap">
                {
                    filteredRestaurant.map((EachRestaurant) => (
                    <Link key={EachRestaurant.info.id} to={"/restaurant/"+EachRestaurant.info.id}>
                        {EachRestaurant.info.avgRating >= 4.5 ? <EnhancedRestaurantCard resData={EachRestaurant}/>: <RestaurantCard  resData={EachRestaurant}/>}
                       </Link>
                ))
                }
            </div>
        </div>
    )
}
export default Body