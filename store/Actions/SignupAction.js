import { setLoading, setError } from "../Slices";
import { Signup } from "../../lib/api-calls/Signup";
import { setSignupStatus } from "../Slices/SignupSlice";

const SignUpAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await Signup(data);
      dispatch(setSignupStatus(res));
      dispatch(setLoading(false));
      dispatch(setError({}));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setError({ msg: e.message }));
    }
  };
};

export default SignUpAction;
