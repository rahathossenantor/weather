import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
    const target = useRef(null);

    useEffect(() => {
        return () => {
            if (target.current) {
                clearTimeout(target.current);
            }
        };
    }, []);

    const debouncedCallback = (...args) => {
        target.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };

    return debouncedCallback;
};

export default useDebounce;
