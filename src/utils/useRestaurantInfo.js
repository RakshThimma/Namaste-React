import { useEffect, useState } from "react";
import { RES_INFO_CDN } from "./constants";
 
const useRestaurantInfo = (resID) => {
    const [resInfo, setresInfo] = useState(null);
    useEffect(() => {
        fetchRestaurantDetails()
    },[])
    
    const fetchRestaurantDetails = async () => {
        const data = await fetch(RES_INFO_CDN+ 
            resID)
        // console.log(RES_INFO_CDN+resID)
        const json = await data.json()
        // console.log(json.data)
        setresInfo(json.data);
    }
    return resInfo;
};
export default useRestaurantInfo