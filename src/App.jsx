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
