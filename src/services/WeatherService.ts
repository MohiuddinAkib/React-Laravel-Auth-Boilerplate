import Axios from "axios";
import { injectable } from "inversify";

@injectable()
export default class WeatherService {
  URL = "http://localhost:8000/weather";

  constructor() {
    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }

  async fetchWeatherData() {
    try {
      const data = await Axios.get(this.URL, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      return data.data;
    } catch (error) {
      return error;
    }
  }
}
