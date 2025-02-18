import { Outlet,Link } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React, { useState } from "react";
import pizzaImage from "../static/pizza-Img.jpg";
import SocialMedia from "./SocialMedia";

const AboutUs = () => {
  return (
    <div className="restaurant-menu">
    <div className="about-container-main">
        <div className="about-container">
          <div className="about-left">
            <h1>
              We deliver it <br />
              <span>hot and yummy.</span>
            </h1>
            <h4>
              "Straight out of <br />
              the kitchen <br />
              to your doorstep."
            </h4>
          </div>
        <div className="about-right">
          <img src={pizzaImage} alt="Food Image" />
        </div>


    </div>
    </div>
    </div>
  );
};
export default AboutUs;
