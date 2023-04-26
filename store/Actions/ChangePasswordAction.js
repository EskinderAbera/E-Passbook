import { ChangePasswordApi } from "../../lib/api-calls/ChangePasswordApi";
import { setError, setLoading } from "../Slices/loadingSlice";
import { setMessage } from "../Slices/ChangePasswordSlice";

const ChangePasswordAction = (data, username) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await ChangePasswordApi(username, data);
      dispatch(setMessage(res.message));
      dispatch(setLoading(false));
      dispatch(setError(""));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setError(e.response?.data?.message));
    }
  };
};

export default ChangePasswordAction;
