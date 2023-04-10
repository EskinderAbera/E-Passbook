import { setError, setLoading } from "../Slices";
import { setInfo } from "../Slices";
import { updatePassword } from "../../lib/api-calls/ChangePasswordApi";

const ChangePasswordAction = (dat, username) => {
  console.log(username);
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await updatePassword(dat, username);
      dispatch(setInfo(res));
      dispatch(setLoading(false));
      dispatch(setError({}));
    } catch (e) {
      if (e.message === "Network Error") {
        dispatch(setError({ msg: e.message }));
        dispatch(setLoading(false));
      } else {
        dispatch(setError(e.response.data));
        dispatch(setLoading(false));
      }
    }
  };
};

export default ChangePasswordAction;
