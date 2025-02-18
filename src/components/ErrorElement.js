import { useRouteError, Link } from "react-router-dom";
import ErrorImg from "../static/error.avif";
//useRouteError is a hook
//It gives us what type of error we have
const ErrorElement = () => {
//    const error = useRouteError();
    const {status, statusText}= useRouteError();


    return (
        <div className="restaurant-menu">
    
        <div className="error-page">
            <img src={ErrorImg} alt="error"/>
            <h1>Oops!!</h1>
            <h2>The page you are looking for is not available</h2>
            <h3 className="error-data">{statusText }</h3>
            <h3 className="error-back-home">
                <Link to="/">Home</Link>
            </h3>
        </div>
        </div>
    );
};

export default ErrorElement;
