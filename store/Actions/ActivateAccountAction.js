import { setLoading, setError } from "../Slices/loadingSlice";
import { ActivateAccount } from "../../lib/api-calls/ActivateAccount";
import { setActiveStatus } from "../Slices/HomeSlice";

const ActivateAccountAction = (accountNumber) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await ActivateAccount(accountNumber);
      dispatch(setActiveStatus(res));
      dispatch(setLoading(false));
      dispatch(setError({}));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setError(e.response.data));
    }
  };
};

export default ActivateAccountAction;
