import axios from "axios";

export const OtpVerifyAPI = async (otp) => {
  const response = await axios.post(
    `http://localhost:9000/api/otp/verify/${otp}`
  );
  return response.data;
};
