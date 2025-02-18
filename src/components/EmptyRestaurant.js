import LocationUnservicable from "../static/location_unserviceable.jpg";
//useRouteError is a hook
//It gives us what type of error we have
const EmptyRestaurant = () => {
//    const error = useRouteError();
    return (
        <div className="restaurant-menu">
        <div className="location-unservicable">
            <img className = "location-img" src={LocationUnservicable} alt="Location Unservicable"/>
            <h3>Location Unserviceable</h3>
            <h4>We are not servicing here now. </h4>
            <h3 className="error-data">Do visit after some time!!</h3>
        </div>
        </div>
    );
};

export default EmptyRestaurant;