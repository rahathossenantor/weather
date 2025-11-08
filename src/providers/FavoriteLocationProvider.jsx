import { FavoriteLocationContext } from "../context";
import { useLocalStorage } from "../hooks";

export default function FavoriteLocationProvider({ children }) {
    const [favoriteLocations, setFavoriteLocations] = useLocalStorage(
        "favoriteLocations",
        []
    );

    const addToFavoriteLocations = (latitude, longitude, location) => {
        const newFavorite = { latitude, longitude, location };
        setFavoriteLocations((prevFavLocations) => [
            ...prevFavLocations,
            newFavorite,
        ]);
    };

    const removeFromFavoriteLocations = (location) => {
        setFavoriteLocations((prevFavLocations) =>
            prevFavLocations.filter((loc) => loc.location !== location)
        );
    };

    return (
        <FavoriteLocationContext.Provider
            value={{
                favoriteLocations,
                addToFavoriteLocations,
                removeFromFavoriteLocations,
            }}
        >
            {children}
        </FavoriteLocationContext.Provider>
    );
}
