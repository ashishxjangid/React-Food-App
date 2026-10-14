import RestCard from "./RestCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {

    // State variable
    const [listOfRestaurants, setListOfRestaurants]= useState([]);
    const [allRestaurants, setAllRestaurants]= useState([]);

    const [searchText, setSearchText]= useState("");

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData= async () => {
        const data= await fetch("https://corsproxy.io/?key=96234a8d&url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1680085&lng=75.8516495&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        
        //Optional Chaining
        const resList= json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
        setListOfRestaurants(resList);
        setAllRestaurants(resList);
    }
    
    //Conditional Rendering
    return (listOfRestaurants.length === 0)? <Shimmer/> : 
    (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    
                    <button onClick= {()=>{
                        setListOfRestaurants(allRestaurants.filter((res)=> 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ));
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredlist= listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.4
                    );
                    setListOfRestaurants(filteredlist);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="rest-container">
                {listOfRestaurants.map((res)=>(
                    <Link key={res.info.id} to={"/restaurants/"+ res.info.id}><RestCard resData= {res} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;