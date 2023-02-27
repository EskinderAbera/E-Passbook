import axios from "axios";

export const ActivateAccount = async (accountNumber) => {
  const response = await axios.patch(
    `http://localhost:9000/api/accounts/updateStatus/${accountNumber}/true`
  );
  return response.status;
};
