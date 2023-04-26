import { OtpVerifyAPI } from "../../lib/api-calls/OtpVerify";
// import { setLoading, setError } from "../Slices";
import { setLoading, setError } from "../Slices/loadingSlice";
import { setCheckStatus } from "../Slices/OtpSlice";

const OtpVerifyAction = (otp) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await OtpVerifyAPI(otp);
      dispatch(setCheckStatus(res));
      dispatch(setLoading(false));
      dispatch(setError(""));
    } catch (e) {
      console.log(e);
      dispatch(setLoading(false));
      dispatch(setError(e.message));
    }
  };
};

export default OtpVerifyAction;
