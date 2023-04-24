import { setError } from "../Slices/loadingSlice";
import { fetchUserInfo } from "../../lib/api-calls/UserInfo";
import { setUserInfo } from "../Slices/UserInfoSlice";

const UserInfoAction = (username) => {
  return async (dispatch) => {
    try {
      const res = await fetchUserInfo(username);
      dispatch(setUserInfo(res));
      dispatch(setError(""));
    } catch (e) {
      console.log("error", e);
      // dispatch(setError(e.reponse.data.message));
    }
  };
};

export default UserInfoAction;
