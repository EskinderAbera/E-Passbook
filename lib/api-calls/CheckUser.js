import { axiosConfig } from "../axios";

export const CheckUserExistenceAPI = async (phoneNumber) => {
  const response = await axiosConfig.post(
    `/api/auth/checkUserExistence/${phoneNumber}`
  );
  return response.data;
};
