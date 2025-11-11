import { useContext } from "react";
// import search from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

export default function Search() {
    const { setSelectedLocation } = useContext(LocationContext);

    const doSearch = useDebounce((searchTerm) => {
        const searchedLocation = getLocationByName(searchTerm);
        setSelectedLocation({ ...searchedLocation });
    }, 500);

    return (
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location"
                    required
                    onChange={(e) => doSearch(e.target.value)}
                />
                {/* <button type="submit" className="cursor-pointer">
                    <img src={search} />
                </button> */}
            </div>
        </form>
    );
}
