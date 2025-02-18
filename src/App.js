import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
//Default and named Import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ErrorElement from "./components/ErrorElement"; 
import Profile from "./components/ProfileClass";
//import Profile from "./components/Profile";
import RestaurantDetails from "./components/RestaurantDetails";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./components/Login.js";
import Shimmer from "./components/ShimmerUI.js";
import Cart from "./components/Cart.js";


import { Provider } from "react-redux";
import store from "./utils/store.js";


//LAZY IMPORT
const Instamart = lazy(() => import("./components/instamart.js"));
//upon loading => react-renders => suspends the load

const AppLayout = () => (
  <Provider store={store}> 
    <Header />
    { /* Outlet is present here */}
      <Outlet />
    <Footer />
  </Provider>
);

//WE have to create a routing configuration
//we do it using the createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement/>,
    children: [
      {
        path: "/",
        element: <Body />,  
      },
      {
        path: "about",
        element: <AboutUs />,
        children: [{
          path: "profile", // parentPath/{path} => localhost>1234/about/profile
          //also need to add the outlet component in the about
          element: <Profile />,
        }]  
      }, 
      {
        path: "contact",
        element: <Contact />,  
      }, 
      {
        path: "/restuarant/:id",
        element: <RestaurantDetails />,  
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      /*{
        path: "/instamart",
        element: <Suspense fallback={<Shimmer/>}><Instamart /></Suspense>,
        errorElement: <ErrorElement/>,  
      }  */  
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

//We need to provide this AppRouter to our App
//We do it using the RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing the props
root.render(<RouterProvider router={appRouter} />);
