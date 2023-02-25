import axios from "axios";

export const CheckUserExistenceAPI = async (phoneNumber) => {
  const response = await axios.post(
    `http://localhost:9000/api/auth/checkUserExistence`,
    {
      phoneNumber: phoneNumber,
    }
  );
  return response.data;
};
