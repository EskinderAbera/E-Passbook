import { axiosConfig } from "../axios";

export const sendOtp = async (username) => {
  const response = await axiosConfig.post(`/api/otp/verify/${otp}`);
  return response.status;
};
