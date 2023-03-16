import { axiosConfig } from "../axios";

export const fetchUserInfo = async (username) => {
  const response = await axiosConfig.get(
    `/api/users/getUserByPhone/${username}`
  );
  return response.data;
};
