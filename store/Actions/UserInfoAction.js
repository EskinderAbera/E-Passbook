import { setError } from "../Slices";
import { fetchAccounts } from "../../lib/api-calls/fetchAccounts";
import { setUserInfo } from "../Slices/UserInfoSlice";

const AccountsAction = (phoneNumber) => {
  return async (dispatch) => {
    try {
      const res = await fetchAccounts(phoneNumber);
      setUserInfo(res);
    } catch (e) {
      if (e.message === "Network Error") {
        dispatch(setError({ msg: e.message }));
      } else {
        dispatch(setError({ msg: e.response.data }));
      }
    }
  };
};

export default AccountsAction;
