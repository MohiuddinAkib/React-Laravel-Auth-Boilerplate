import React from "react";
import useMarsWeather from "../hooks/useMarsWeather";

export const WeatherContext = React.createContext({ weather: {} });

const Provider: React.FC = (props) => {
  const weather = useMarsWeather();

  return (
    <WeatherContext.Provider value={{ weather }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default Provider;
