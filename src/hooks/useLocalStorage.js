import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, initialValue) => {
    const [storedValue, setStoredValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? initialValue
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(storedValue));
    }, [storageKey, storedValue]);

    return [storedValue, setStoredValue];
};

export default useLocalStorage;
