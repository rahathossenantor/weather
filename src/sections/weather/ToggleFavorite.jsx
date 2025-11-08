import { useContext, useEffect, useState } from "react";
import redHeart from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { FavoriteLocationContext, WeatherContext } from "../../context";

export default function ToggleFavorite() {
    const { weather } = useContext(WeatherContext);
    const {
        favoriteLocations,
        addToFavoriteLocations,
        removeFromFavoriteLocations,
    } = useContext(FavoriteLocationContext);

    const [isFavorite, setIsFavorite] = useState(false);
    const { latitude, longitude, location } = weather;

    useEffect(() => {
        const isFavoriteLocation = favoriteLocations?.find(
            (fav) => fav.location === location
        );
        setIsFavorite(!!isFavoriteLocation);
    }, [location, favoriteLocations]);

    const toggleFavorite = () => {
        const alreadyFavorite = favoriteLocations?.find(
            (fav) => fav.location === location
        );

        if (!alreadyFavorite) {
            console.log("Adding to Favorites!");
            addToFavoriteLocations(latitude, longitude, location);
        } else {
            console.log("Already Fav!");
            removeFromFavoriteLocations(location);
        }

        setIsFavorite(!isFavorite);
    };

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer"
                    onClick={toggleFavorite}
                >
                    <span>
                        {isFavorite
                            ? "Remove from Favorite"
                            : "Add to Favorite"}
                    </span>
                    <img src={isFavorite ? redHeart : heart} alt="heart" />
                </button>
            </div>
        </div>
    );
}
