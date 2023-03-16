import { axiosConfig } from "../axios";

export const transactions = async (acct) => {
  const response = await axiosConfig.post("api/ministatement", {
    accountNumber: acct,
  });

  return response.data;
};
