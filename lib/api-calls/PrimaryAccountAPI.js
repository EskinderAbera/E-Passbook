import axios from "axios";
import { axiosConfig } from "../axios";

export const PrimaryAccountAPI = async (username, account, pin) => {
  const response = await axiosConfig.put(
    `/api/accounts/setPrimaryAccount/${username}`,
    { accountNumber: account, passcode: pin }
  );
  return response.status;
};
