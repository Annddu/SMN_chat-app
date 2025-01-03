import { Storefront } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useState } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStroredValue] = useState(() => {
        try{
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            const valueToStore = 
                typeof storedValue === "function"
                    ? storedValue(storedValue)
                    : storedValue;
            
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStroredValue];
}

export default useLocalStorage;