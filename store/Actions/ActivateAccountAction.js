import { setError, setLoading } from "../Slices";
import { ActivateAccount } from "../../lib/api-calls/ActivateAccount";
import { setActiveStatus } from "../Slices/HomeSlice";

const ActivateAccountAction = (accountNumber) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await ActivateAccount(accountNumber);
      dispatch(setActiveStatus(res));
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setError({ msg: e.response.data }));
    }
  };
};

export default ActivateAccountAction;
