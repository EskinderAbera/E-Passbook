import { axiosConfig } from "../axios";

export const Signup = async (data) => {
  const response = await axiosConfig.put("/api/auth/register", data);
  return response.status;
};
