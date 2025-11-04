import { useEffect, useState } from "react";

const useWeather = () => {
    const [weather, setWeather] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [error, setError] = useState(null);

    const fetchWeatherInfo = async (latitude, longitude) => {
        try {
            setLoading({ state: true, message: "Loading weather data..." });

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${"d81493c0fe7e2deb506aef48bfff14d5"}&units=metric`
            );

            if (!response.ok) {
                throw new Error(
                    `Fetching weather data failed: ${response.status}`
                );
            }

            const data = await response.json();
            setWeather({
                ...weather,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            });
        } catch (err) {
            setError(err);
        } finally {
            setLoading({ state: false, message: "" });
        }
    };

    useEffect(() => {
        setLoading((prevLoading) => ({
            ...prevLoading,
            state: true,
            message: "Finding location...",
        }));

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherInfo(latitude, longitude);
            },
            (error) => {
                setError(error);
            }
        );
    }, []);

    return { weather, loading, error };
};

export default useWeather;
