import axios from "axios";

export const PrimaryAccountAPI = async (phoneNumber, account, pin) => {
  const response = await axios.put(
    `http://localhost:9000/api/accounts/setPrimaryAccount/${phoneNumber}`,
    { accountNumber: account, passcode: pin }
  );
  return response.status;
};
