import axios, { type AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://ghibliapi.vercel.app",
  timeout: 10 * 1000,
});
