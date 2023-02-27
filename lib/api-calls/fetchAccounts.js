import axios from "axios";

export const fetchAccounts = async (phoneNumber) => {
  const response = await axios.get(
    `http://localhost:9000/api/accounts/getAccounts/${phoneNumber}`
  );
  return response.data;
};
