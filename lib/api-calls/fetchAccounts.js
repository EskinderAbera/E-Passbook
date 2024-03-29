import { axiosConfig } from "../axios";

export const fetchAccounts = async (username) => {
  const response = await axiosConfig.get(
    `/api/accounts/getAccounts/${username}`
  );
  return response.data;
};
