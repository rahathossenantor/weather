import { useWeather } from "./hooks";
import Header from "./sections/header/Header";
import WeatherBoard from "./sections/weather/WeatherBoard";

export default function App() {
    const { weather, loading, error } = useWeather();

    return (
        <>
            <Header />
            <main>
                <section>
                    <WeatherBoard />
                </section>
            </main>
        </>
    );
}
