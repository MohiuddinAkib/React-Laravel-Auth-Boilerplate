import { injectable } from "inversify";
import { AxiosInstance } from "axios";
import client from "../config/HttpClient";

@injectable()
export default abstract class AbstractService {
  protected readonly URL = "http://localhost:8000/api";
  protected client: AxiosInstance;
  protected readonly socketHeader = "X-Socket-ID";

  constructor() {
    this.client = client.getAxiosClient();
  }

  setSocketHeader = (socketId: string | undefined) => {
    client.setSocketHeader(socketId);
  };
}
