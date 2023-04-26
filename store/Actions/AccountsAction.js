import { setAccounts, setIsLoaded } from "../Slices/HomeSlice";
import { fetchAccounts } from "../../lib/api-calls/fetchAccounts";
import { setError } from "../Slices/loadingSlice";

const AccountsAction = (username) => {
  return async (dispatch) => {
    try {
      const res = await fetchAccounts(username);
      dispatch(setAccounts(res));
      dispatch(setIsLoaded(false));
      dispatch(setError(""));
    } catch (e) {
      console.log("account action", e);
      // if (e.message === "Network Error") {
      //   dispatch(setError("Network Error"));
      // } else {
      //   dispatch(setError(e.response.data.message));
      // }
    }
  };
};

export default AccountsAction;
