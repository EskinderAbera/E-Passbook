import { CheckUserExistenceAPI } from "../../lib/api-calls/CheckUser";
import { setError, setLoading, setUserInfo } from "../Slices";

const checkPhoneAction = (phoneNumber) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await CheckUserExistenceAPI(phoneNumber);
      dispatch(setUserInfo(res));
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setError({ msg: e.response.status }));
    }
  };
};

export default checkPhoneAction;
