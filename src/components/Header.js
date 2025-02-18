import { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import useOnline from "../helperHooks/useOnline.js"
import userAuthentication from "../helperHooks/useAuthentication.js";
import useLocalStorage from '../helperHooks/useLocalStorage.js';
import Logo from "../static/FoodyZ.png";
 
//Subscribing our store
import { useSelector } from "react-redux";


export const Title = () => (
    <Link to="/">
      <img className ="logo" src={Logo} alt="FoodyZ" title='FoodyZ'/>
    </Link>
  );
 
//Single page application
//Two  types of routing are there:
// 1. Client Side Routing
// 2. Server Side Routing


  const Header = () => {
    //The useNavigate hook returns a function that lets you navigate programmatically, for example in an effect:
    const navigate = useNavigate();

    const [getLocal, ,clearLocalStorage] = useLocalStorage("user");

    //subscribe to our store
    const cartItems = useSelector((store) => store.cart.items);





    //console.log(getLocal);
    
    const [isLoggedIn, setIsLoggedIn] = userAuthentication();

    useEffect(() => {
      // if getLocal is null setIsLoggedin  false
      if (getLocal === null) {
        setIsLoggedIn(false);
      }
    }, [getLocal]);

    const isOnline = useOnline();
  
    return (
      <div className="header">
        <Title />
        { isLoggedIn && <div className="user-name">
          Hello {getLocal?.userName},</div>}

        <div className="nav-items">
          <ul>
            <li> <Link to="/">
             Home </Link></li>
            
            
            <li> <Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"> - {cartItems.length}</i>
            </Link>
            </li>

            <li>
              {isLoggedIn ? (
                <button 
                className="logout-btn"
                onClick={() => {
                  clearLocalStorage()
                  setIsLoggedIn(false);
                }}>
                  LogOut<span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span>
              </button>
              ):
              (
                <button className="login-btn" onClick={() => navigate("/login")}>
                Login<span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span>
              </button>
              )}
            </li>
          </ul>
        </div>
        </div>
    );
  };

  
  export default Header;
