import { useState } from "react";
import heart from "../../assets/heart.svg";
import logo from "../../assets/logo.svg";
import FavoriteLocationsListModal from "./FavoriteLocationsListModal";
import Search from "./Search";

export default function Header() {
    const [showFavoriteModal, setShowFavoriteModal] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
                <a href="./index.html">
                    <img className="h-9" src={logo} alt="Weather App" />
                </a>

                <div className="flex items-center gap-4 relative">
                    <Search />
                    <button
                        className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all border"
                        onClick={() => setShowFavoriteModal(!showFavoriteModal)}
                    >
                        <img src={heart} alt="heart" />
                        <span>Favorite Locations</span>
                    </button>
                    {showFavoriteModal && (
                        <FavoriteLocationsListModal
                            onClose={() => setShowFavoriteModal(false)}
                        />
                    )}
                </div>
            </nav>
        </header>
    );
}
