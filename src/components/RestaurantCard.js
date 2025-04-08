import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props
    
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} =resData?.info
    // console.log(resData.info.cloudinaryImageId)
    // console.log(resData.info)
    return (
        <div data-testid="ResCard" className="res-card rounded-md w-72 h-[400px] mx-1 my-2 shadow-xl hover:shadow-2xl p-4 bg-white" >
            <img className="res-img w-full h-60 rounded-md" src= {CDN_URL+cloudinaryImageId}/>
            <h3 className="res-name font-bold py-1 text-lg">{name}</h3>
            <h4 className="res-rating text-red-600">{avgRating} • 25-30 mins</h4>
            <p className="res-cuisine text-blue-800">{cuisines.join(", ")}</p>
            <p className="res-addr text-green-700">{costForTwo}</p>
        </div>
    )
}
export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div data-testid="PromotedResCard">
                <label className="absolute bg-pink-400 text-white p-1 rounded-sm m-1">Top-rated</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
