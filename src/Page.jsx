import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context";
import Loader from "./Loader";
import Header from "./sections/header/Header";
import WeatherBoard from "./sections/weather/WeatherBoard";

import clearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import fewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import mistImage from "./assets/backgrounds/mist.jpeg";
import rainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import scatteredCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import snowImage from "./assets/backgrounds/sunny.jpg";
import thunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import winterImage from "./assets/backgrounds/winter.jpg";

export default function Page() {
    const { loading, weather } = useContext(WeatherContext);
    const [climateImage, setClimateImage] = useState("");

    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return rainyDayImage;
            case "Clouds":
                return scatteredCloudsImage;
            case "Clear":
                return clearSkyImage;
            case "Snow":
                return snowImage;
            case "Thunder":
                return thunderStormImage;
            case "Fog":
                return winterImage;
            case "Haze":
                return fewCloudsImage;
            case "Mist":
                return mistImage;
            default:
                return clearSkyImage;
        }
    }

    useEffect(() => {
        const bgImage = getBackgroundImage(weather.climate);
        setClimateImage(bgImage);
    }, [weather.climate]);

    return (
        <>
            {loading.state ? (
                <div className="bg-body h-screen grid place-items-center">
                    <Loader />
                </div>
            ) : (
                <div
                    style={{ backgroundImage: `url('${climateImage}')` }}
                    className="font-[Roboto] text-light h-screen grid place-items-center bg-no-repeat bg-cover"
                >
                    <Header />
                    <main>
                        <section>
                            <WeatherBoard />
                        </section>
                    </main>
                </div>
            )}
        </>
    );
}
