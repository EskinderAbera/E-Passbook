import { axiosConfig } from "../axios";

export const ChangePasswordApi = async (username, data) => {
  const response = await axiosConfig.put(
    `/api/users/changePin/${username}`,
    data
  );
  return response.data;
};
