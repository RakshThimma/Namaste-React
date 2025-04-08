import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    const onlinestatus = useOnlineStatus();
    // subscribing to the store using a Selector (redux) - a hook 
    const cart = useSelector((store) => store.cart.items);
    // console.log(cart)
    return (
        <div className="flex justify-between items-center m-4">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-list">
                <ul className="flex p-4 my-3 mx-14 gap-10">
                    <li>Online Status : {
                        onlinestatus ? "Green" :"red"
                        }
                        </li>
                    <li><Link className="nav-links" to="/">Home</Link></li>
                    <li><Link className="nav-links" to="/about">About Us</Link></li>
                    <li><Link className="nav-links " to="/contact">Conatct Us</Link></li>
                    <li><Link className="nav-links" to="/cart">Cart ({cart.length})</Link></li>
                    <li className="cursor-pointer"><i className="fa fa-shopping-cart cart" ></i></li>
                    <button className="Login" onClick={() => {
                        if(btnName ==="Login"){
                            setbtnName("Logout");
                        }
                        else {
                            setbtnName("Login")
                        }
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header