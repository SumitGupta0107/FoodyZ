import { useState, useEffect } from "react";
import { swiggy_api_URL } from "../components/config";

const useRestaurantsList = () => {
  /* we need to filter the restaurantList according to searchText but initially our restaurants should contain the whole restaurantList.
  
  we need to maintain two restuarants - 
     filtered restuarant
    all restuarants
    and we should show filtered restuarants
  */
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
  async function getRestaurants() {
    //error checking here
    try {
      //fetch return a promise in the form of a readable stream
      const data = await fetch(swiggy_api_URL);
      if (!data.ok) {
        const err = data.status;
        throw new Error(err);
      } else {
        // data.json also return a promise
        const json = await data.json();
        // now we set the values of restaurants

        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonD) {
          for (let i = 0; i < jsonD?.data?.cards.length; i++) {
            const tempData =
              jsonD?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

            if (tempData !== undefined) {
              return tempData;
            }
          }
        }
        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);
        //optional Chaining
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //USING USEEFFECT() HOOK'
  useEffect(() => {
    //Api call should be here
    getRestaurants();
  }, []);

  return [allRestaurants,filteredRestaurants];
};

export default useRestaurantsList;