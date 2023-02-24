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
      console.log(e);
      dispatch(setLoading(false));
      dispatch(setError(e.response.data));
    }
  };
};

export default checkPhoneAction;
