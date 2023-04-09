import { sendOtp } from "../../lib/api-calls/sendOtp";
import { setLoading, setError } from "../Slices";
import { setOtpStatus } from "../Slices/OtpSlice";

const SendOtpAction = (username) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await sendOtp(username);
      dispatch(setOtpStatus(res));
      dispatch(setLoading(false));
      dispatch(setError({}));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setError({ msg: e.message }));
    }
  };
};

export default SendOtpAction;
