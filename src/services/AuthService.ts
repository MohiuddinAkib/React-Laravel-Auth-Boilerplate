import jwt from "jsonwebtoken";
import { injectable } from "inversify";
import AbstractService from "./AbstractService";

@injectable()
export default class AuthService extends AbstractService {
  private readonly authToken = "x-auth-token";

  login = async (data: { email: string; password: string }) => {
    const response = await this.client.post<string>(`login`, data);
    this.processToken(response.headers);
    return response.data;
  };

  register = async (data: {
    email: string;
    name: string;
    password: string;
    password_confirmation: string;
  }) => {
    const response = await this.client.post("register", data);
    return response.data;
  };

  processToken = (headers: { "x-auth-token": string }) => {
    const token = headers[this.authToken];
    localStorage.setItem(this.authToken, token);
  };

  getToken = () => {
    return localStorage.getItem(this.authToken);
  };

  removeToken = () => {
    return localStorage.removeItem(this.authToken);
  };

  fetchUserData = async () => {
    if (!this.setAuthorizationHeader()) {
      return Promise.reject("Authentication header problem");
    }

    const response = await this.client.get<{
      id: number;
      name: string;
      email: string;
      created_at: string;
    }>(`auth/me`);

    return response.data;
  };

  setAuthorizationHeader = () => {
    const token = this.getToken();

    if (!token) {
      return false;
    }

    try {
      jwt.verify(token, process.env.REACT_APP_JWT_SECRET as string);
      this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return true;
    } catch (error) {
      this.removeToken();
      return false;
    }
  };

  sendResetLinkEmail = async (email: string) => {
    const response = await this.client.post<string>("password/email", {
      email,
    });
    return response.data;
  };

  resetPassword = async (data: {
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    const response = await this.client.post<string>("password/reset", data);
    return response.data;
  };

  verifyEmail = async (id: string, hash: string) => {
    if (!this.setAuthorizationHeader()) {
      return Promise.reject("Authentication header problem");
    }

    const response = await this.client.get(`email/verify/${id}/${hash}`);
    return response.data;
  };
}
