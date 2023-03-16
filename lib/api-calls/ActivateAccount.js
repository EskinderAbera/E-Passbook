import axios from "axios";
import { axiosConfig } from "../axios";

export const ActivateAccount = async (accountNumber) => {
  const response = await axiosConfig.patch(
    `/api/accounts/updateStatus/${accountNumber}/true`
  );
  return response.status;
};
