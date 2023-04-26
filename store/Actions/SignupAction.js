import { setLoading, setError } from "../Slices/loadingSlice";
import { Signup } from "../../lib/api-calls/Signup";
import { setSignupStatus } from "../Slices/SignupSlice";

const SignUpAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await Signup({ userInfo: data });
      dispatch(setSignupStatus(res));
      dispatch(setLoading(false));
      dispatch(setError(""));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setError(e.message));
      // console.log(e.message);
    }
  };
};

export default SignUpAction;
