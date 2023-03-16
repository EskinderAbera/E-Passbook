import { axiosConfig } from "../axios";

export const getAccountList = async (phoneNumber) => {
  try {
    const res = await axiosConfig.get(
      `/api/accounts/getAccounts/${phoneNumber}`
    );
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};
