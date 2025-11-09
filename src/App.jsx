import {
    FavoriteLocationProvider,
    LocationProvider,
    WeatherProvider,
} from "./providers";
import Header from "./sections/header/Header";
import WeatherBoard from "./sections/weather/WeatherBoard";

export default function App() {
    return (
        <LocationProvider>
            <WeatherProvider>
                <FavoriteLocationProvider>
                    <Header />
                    <main>
                        <section>
                            <WeatherBoard />
                        </section>
                    </main>
                </FavoriteLocationProvider>
            </WeatherProvider>
        </LocationProvider>
    );
}
