import React from "react";
import { useQuery } from "react-query";
import container from "../services/serviceContainer";
import WeatherService from "../services/WeatherService";

const weatherService = container.get<WeatherService>("WeatherService");

const useMarsWeather = () => {
  return useQuery("weather-data", weatherService.fetchWeatherData);
};

export default useMarsWeather;
