import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
    // get localStorage value
    const localStorageValue = localStorage.getItem(key);

    // initial valur of localStorage
    const [getLocal, setLocal] = useState(localStorageValue ? JSON.parse(localStorageValue) : null);

    useEffect(() => {
        if (localStorageValue) {
            setLocal(JSON.parse(localStorageValue));
        } else {
            setLocal(null)
        }
    }, [localStorageValue])

    // set value in localStorage
    const setLocalStorage = (value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    // clear value in localStorage
    const clearLocalStorage = () => {
        localStorage.clear();
    }
    return [getLocal, setLocalStorage, clearLocalStorage];
}

export default useLocalStorage;