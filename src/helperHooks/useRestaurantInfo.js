import { useState, useEffect } from "react";
import {
  swiggy_restaurant_api_url,
  RESTAURANT_TYPE,
  ITEM_CATEGORY_TYPE,
} from "../components/config";

const useRestaurantInfo = (id) => {
  // This state variable stores the menu items of restaurant
  const [menuItems, setMenuItems] = useState([]);

  //This stores the data about the restaurant
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  async function getRestaurantMenu() {
    try {
      const data = await fetch(swiggy_restaurant_api_url + id);

      if (!data.ok) {
        const err = data.status;
        throw new Error(err);
      } else {
        const json = await data.json();

        //see the json
        // Set restaurant data
        //find() returns the first element that satisfies the condition
        //object.values(ob) return an array of objects
        const restaurantData =
          json?.data?.cards
            ?.map((cards) => cards.card)
            ?.find((card) => card && card.card["@type"] === RESTAURANT_TYPE)
            ?.card?.info || null;

        setRestaurantInfo(restaurantData);
        //console.log(restaurantData);

        // Set menu item data
        // The flat method is used to flatten the array of arrays into a single array, removing any undefined elements in the process.
        const menuItemsInfo =
          json?.data?.cards
            .find((cards) => cards.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (cards) => cards.card?.card
            )
            ?.filter((cards) => cards["@type"] == ITEM_CATEGORY_TYPE)
            ?.map((cards) => cards.itemCards)
            .flat()
            .map((cards) => cards.card?.info) || [];

        //  console.log(menuItemsInfo);

        const filteredMenuItems = [];
        menuItemsInfo.forEach((element) => {
          if (!filteredMenuItems.find((item) => item.id === element.id)) {
            filteredMenuItems.push(element);
          }
        });
        // storing hte menu items data
        setMenuItems(filteredMenuItems);
      }
    } catch (err) {
      setMenuItems([]);
      setRestaurantInfo(null);
      console.log(err);
    }
  }

  //calls the getRestaurantMenu() and stores the info of restaurant in the restaurantMenu variable by calling the api .
  useEffect(() => {
    getRestaurantMenu();

    //This will be called when we are unmounting
    return () => {};
  }, []);

  //return the restaurant info and its menu
  return [restaurantInfo, menuItems];
};

export default useRestaurantInfo;
