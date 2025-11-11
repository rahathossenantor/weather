import Page from "./Page";
import {
    FavoriteLocationProvider,
    LocationProvider,
    WeatherProvider,
} from "./providers";

export default function App() {
    return (
        <LocationProvider>
            <WeatherProvider>
                <FavoriteLocationProvider>
                    <Page />
                </FavoriteLocationProvider>
            </WeatherProvider>
        </LocationProvider>
    );
}

// VITE_WEATHER_API_KEY = d81493c0fe7e2deb506aef48bfff14d5;
