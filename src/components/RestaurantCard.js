import {IMG_CDN_URL} from "./config";

//RestaurantCard Component
//taking props 
const RestaurantCards = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
  areaName,
  costForTwo,
}) => {
  //console.log(cuisines);
    return (
      <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>{costForTwo ?? '₹350 for two'}</h4>
      </span>
    </div>
   );
  };

export default RestaurantCards;
