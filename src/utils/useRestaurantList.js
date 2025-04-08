import { useState, useEffect } from "react"
const useRestaurantList = () => {
    const [restaurantsList, setrestaurantsList] = useState([]);
    // const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    useEffect(() => {
        fetchData();
    },[])

    const fetchData =async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9252007&lng=78.1197754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setrestaurantsList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
    return [restaurantsList]
}
export default useRestaurantList