import Axios, { AxiosInstance } from "axios";

const socketHeaderName = "X-Socket-ID";
const baseURL = "http://localhost:8000/api";
const AxiosClient = Axios.create({
  baseURL,
});

export default {
  getAxiosClient: () => {
    return AxiosClient;
  },
  setSocketHeader: (value: string | undefined) => {
    AxiosClient.defaults.headers.common[socketHeaderName] = value;
  },
};
