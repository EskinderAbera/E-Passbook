import { setError, setLoading } from "../Slices";
import { PrimaryAccountAPI } from "../../lib/api-calls/PrimaryAccountAPI";
import { setPrimaryAccount } from "../Slices/HomeSlice";

const SetPrimaryAction = (phoneNumber, account, pin) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await PrimaryAccountAPI(phoneNumber, account, pin);
      dispatch(setPrimaryAccount());
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setError({ msg: e.response.data }));
    }
  };
};

export default SetPrimaryAction;
