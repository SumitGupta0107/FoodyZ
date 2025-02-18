import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useAuthentication = () => {

    const [localStorageValue] = useLocalStorage("user");
    
    // checking user is Logged in or not 

    const [isLoggedIn, setIsLoggedIn] = useState(localStorageValue?.token?.length ===100 ? true : false);

    
    return [isLoggedIn, setIsLoggedIn];
}

export default useAuthentication;