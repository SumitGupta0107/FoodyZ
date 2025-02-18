import { useState } from "react";
import RestaurantCards from "./RestaurantCard.js";
import Shimmer from "./ShimmerUI.js";
import { swiggy_api_URL } from "./config.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useRestaurantsList from "../helperHooks/useRestaurantList.js";
import useOnline from "../helperHooks/useOnline.js"
import Offline from "./Offline.js";
import EmptyRestaurant from "./EmptyRestaurant.js";

//import restaurantList from "./config.js";


// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  //searchText is a local state variable and setSearchText is used to modify it.
  //useState is a react hook used to create a state variable.
  const [searchText, setSearchText] = useState(""); //To create a state variable

   /* we need to filter the restaurantList according to searchText but initially our restaurants should contain the whole restaurantList.
   

  we need to maintain two restuarants - 
     filtered restuarant
    all restuarants
    and we should show filtered restuarants
  */
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, filteredRes] = useRestaurantsList();
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  const isOnline = useOnline(); 

  if(!isOnline){
    return <Offline/>;
  }
  
  
  
  //condititonal rendering
  //if restaurant is empty => shimmer UI
  //else if restaurant has data => actual data UI

  //shimmer is only shown when Allrestaurants is empty

  //early return - Not render anything
  if (!allRestaurants){
    console.log("EARLY RETURNED");
    return <EmptyRestaurant/>;
  }

  //if(filteredRestaurants?.length === 0)
  //return <h1> No restaurants matches your filter</h1>;

  const searchRestaurants = (searchText, allRestaurants) => {
    if (searchText.length > 0) {
      const data = filterData(allRestaurants, searchText);
      setFilteredRestaurants(data);
      setErrorMessage("");

      if (filteredRestaurants?.length === 0) {
        setErrorMessage("No restaurants matches your filter");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(allRestaurants);
    }
  };

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          // updating the state whenever user type in search box
          onChange={(e) => {
            setSearchText(e.target.value);
            searchRestaurants(e.target.value,allRestaurants);
          }
        }/>
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data and after we filter we have to update Restaurants.
            searchRestaurants(searchText, allRestaurants);
          }}>
          Search-{searchText}
        </button>
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}

     { allRestaurants?.length === 0 && filteredRes?.length === 0 ? (
    <Shimmer />
  ) : (
      <div className="restaurant-list">
        { (filteredRestaurants === null ? filteredRes : filteredRestaurants).map((restaurant) => {
          return (
            <Link to={"/restuarant/" + restaurant?.info?.id}
            key = {restaurant?.info?.id}
            > 
            <RestaurantCards {...restaurant?.info} />
            </Link>
          );
        })}      
      </div>
  )}
    </div>
  );
};

export default Body;
