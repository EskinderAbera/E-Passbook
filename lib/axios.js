import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "http://10.1.177.125:9000",
});
