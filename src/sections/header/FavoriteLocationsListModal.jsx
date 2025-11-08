import { useContext } from "react";
import { FavoriteLocationContext } from "../../context";

export default function FavoriteLocationsListModal() {
    const { favoriteLocations } = useContext(FavoriteLocationContext);

    return (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
            <h3 className="text-lg font-bold px-4">Favorite Locations</h3>
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                {favoriteLocations.length ? (
                    favoriteLocations.map((fav) => (
                        <li
                            key={fav.location}
                            className="px-4 py-2 hover:bg-gray-200"
                        >
                            {fav.location}
                        </li>
                    ))
                ) : (
                    <li className="px-4 py-2 text-gray-500">
                        No favorite locations added.
                    </li>
                )}
            </ul>
        </div>
    );
}
