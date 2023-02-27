import { setError } from "../Slices";
import { setAccounts, setIsLoaded } from "../Slices/HomeSlice";
import { fetchAccounts } from "../../lib/api-calls/fetchAccounts";

const AccountsAction = (phoneNumber) => {
  return async (dispatch) => {
    try {
      const res = await fetchAccounts(phoneNumber);
      dispatch(setAccounts(res));
      dispatch(setIsLoaded(false));
    } catch (e) {
      dispatch(setError({ msg: e.response.data }));
    }
  };
};

export default AccountsAction;
