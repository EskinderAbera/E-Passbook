import { axiosConfig } from "../axios";

export const fetchAccounts = async (phoneNumber) => {
  const response = await axiosConfig.get(
    `/api/accounts/getAccounts/${phoneNumber}`
  );
  return response.data;
};
