import { setLoading, setError } from "../Slices/loadingSlice";
import { PrimaryAccountAPI } from "../../lib/api-calls/PrimaryAccountAPI";
import { setPrimaryAccount } from "../Slices/HomeSlice";

const SetPrimaryAction = (username, account, pin) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await PrimaryAccountAPI(username, account, pin);
      dispatch(setPrimaryAccount());
      dispatch(setLoading(false));
      dispatch(setError({}));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setError(e.response.data));
    }
  };
};

export default SetPrimaryAction;
