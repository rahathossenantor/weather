import WeatherProvider from "./providers/WeatherProvider";
import Header from "./sections/header/Header";
import WeatherBoard from "./sections/weather/WeatherBoard";

export default function App() {
    return (
        <WeatherProvider>
            <Header />
            <main>
                <section>
                    <WeatherBoard />
                </section>
            </main>
        </WeatherProvider>
    );
}
