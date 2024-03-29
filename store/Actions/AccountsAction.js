import { setError } from "../Slices";
import { setAccounts, setIsLoaded } from "../Slices/HomeSlice";
import { fetchAccounts } from "../../lib/api-calls/fetchAccounts";

const AccountsAction = (username) => {
  return async (dispatch) => {
    try {
      const res = await fetchAccounts(username);
      dispatch(setAccounts(res));
      dispatch(setIsLoaded(false));
      dispatch(setError({}));
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
