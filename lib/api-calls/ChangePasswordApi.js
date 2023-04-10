import { axiosConfig } from "../axios";

// export const ChangePasswordApi = async (dat, username) => {
//   const response = await axiosConfig.put(
//     `/api/accounts/getAccounts/${username}`,
//     dat
//   );
//   return response.data;
// };

export const updatePassword = async (data, username) => {
  const response = await axiosConfig.put(
    `/api/users/changePin/${username}`,
    data
  );
  return response.data;
};
