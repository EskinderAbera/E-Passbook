import { setError } from "../Slices";
import { fetchUserInfo } from "../../lib/api-calls/UserInfo";
import { setUserInfo } from "../Slices/UserInfoSlice";

const UserInfoAction = (username) => {
  return async (dispatch) => {
    try {
      const res = await fetchUserInfo(username);
      dispatch(setUserInfo(res));
      dispatch(setError({}));
    } catch (e) {
      if (e.message === "Network Error") {
        console.log(e);
        dispatch(setError({ msg: e.message }));
      } else {
        dispatch(setError({ msg: e.response.data }));
      }
    }
  };
};

export default UserInfoAction;
