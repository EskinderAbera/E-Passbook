import axios from "axios";
import { axiosConfig } from "../axios";

export const OtpVerifyAPI = async (otp) => {
  const response = await axiosConfig.post(`/api/otp/verify/${otp}`);
  return response.data;
};
