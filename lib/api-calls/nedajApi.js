import axios from "axios";
// import { axiosConfig } from "../axios";

export const nedajApi = async (data) => {
  const response = await axios.post(
    `http://192.168.137.220:9000/api/nedaj/${data}`
  );
  return response.data;
};
