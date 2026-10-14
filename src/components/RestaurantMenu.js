import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu= ()=> {

    // const [resInfo, setResInfo] = useState(null);

    // useEffect(()=>{
    //     fetchMenu();
    // }, [])

    // const fetchMenu = async ()=> {
    //     const response= await fetch("https://corsproxy.io/?key=96234a8d&url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1680085&lng=75.8516495&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json= await response.json();
    //     setResInfo(json.data);
    // }

    // if(resInfo === null) return <Shimmer/>;

    // const {name} = resInfo?.cards[2]?.card?.card?.info;

    const { resId } = useParams();
    console.log(resId);

    return (
        <div className="menu">
            <h1>Domino's</h1>
            <h2>cuisines-</h2>         
            <h3>Pizzas ,
                Italian-American ,
                American ,
                Barbecue ,
                Snacks ,
                Grill ,
                Italian ,
                Pastas ,
                Sweets ,
                Desserts 
            </h3>  
        </div>
    );
};

export default RestaurantMenu;