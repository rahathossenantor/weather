import Header from "./sections/header/Header";
import WeatherBoard from "./sections/weather/WeatherBoard";

export default function App() {
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
