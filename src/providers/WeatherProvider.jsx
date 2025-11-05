import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

export default function WeatherProvider({ children }) {
    const { weather, loading, error } = useWeather();

    return (
        <WeatherContext.Provider value={{ weather, loading, error }}>
            {children}
        </WeatherContext.Provider>
    );
}
