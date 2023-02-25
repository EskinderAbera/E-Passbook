import axios from "axios";

export const Signup = async (data) => {
  const response = await axios.post(
    "http://localhost:9000/api/auth/register",
    data
  );
  return response.status;
};
