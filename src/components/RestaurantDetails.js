import { useParams } from "react-router-dom";
import {
  IMG_CDN_URL,
  MENU_ITEM_IMG_CDN_URL,
} from "./config";
import {MenuItemsShimmer} from "./ShimmerUI";
import useRestaurantInfo
 from "../helperHooks/useRestaurantInfo"; // imported custom hook useRestaurant which gives restaurant Menu data from swiggy api
 import useOnline from "../helperHooks/useOnline"; 
 import Offline from "./Offline.js";


 import { addItem } from "../utils/cartSlice.js";
 import { useDispatch } from "react-redux";






const RestaurantDetails = () => {
  //helps to read the Dynamic Url 
  const { id } = useParams();
  

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  }




  const onlineOrNot = useOnline();
  if(!onlineOrNot)
  {
    return <Offline />
  }
  //calling the custom hook
  const [restaurantInfo, menuItems] = useRestaurantInfo(id);


  return (!restaurantInfo) ? ( <MenuItemsShimmer /> ) :
    (

      <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img className="restaurant-img" src = {IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} alt = {restaurantInfo?.name}/>
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurantInfo?.name}</h2>
          <p className="restaurant-tags">{restaurantInfo?.cuisines?.join(", ")}</p>
          
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurantInfo?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurantInfo?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurantInfo?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurantInfo?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurantInfo?.costForTwoMessage}</div>
          </div>
        </div>
      </div>


      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">{menuItems.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={MENU_ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn" onClick={() => {
                    addFoodItem(item);
                  }}> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;




//"https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.5220604&lng=87.2593454&&submitAction=ENTER&restaurantId=101354
