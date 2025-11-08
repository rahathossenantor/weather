import FavoriteLocationProvider from "./providers/FavoriteLocationProvider";
import WeatherProvider from "./providers/WeatherProvider";
import Header from "./sections/header/Header";
import WeatherBoard from "./sections/weather/WeatherBoard";

export default function App() {
    return (
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
    );
}
