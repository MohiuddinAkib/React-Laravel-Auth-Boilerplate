import { Container } from "inversify";
import AuthService from "./AuthService";
import WeatherService from "./WeatherService";

const container = new Container();
container.bind("AuthService").to(AuthService);
container.bind("WeatherService").to(WeatherService);

export default container;
