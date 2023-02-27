import axios from "axios";

export const Signup = async (data) => {
  const response = await axios.put(
    "http://localhost:9000/api/auth/register",
    data["payload"]
  );
  return response.status;
};
