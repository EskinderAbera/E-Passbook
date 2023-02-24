import { OtpVerifyAPI } from "../../lib/api-calls/OtpVerify";
import { setLoading, setError } from "../Slices";
import { Signup } from "../../lib/api-calls/Signup";
import { setSignupStatus } from "../Slices/SignupSlice";

const SignUpAction = (data) => {
  // console.log("data", data);
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await Signup(data);
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      dispatch(setSignupStatus(res));
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setError({ msg: e.message }));
    }
  };
};

export default SignUpAction;
