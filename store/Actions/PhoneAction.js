import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckUserExistenceAPI } from "../../lib/api-calls/CheckUser";
import { setError, setLoading, setUserInfo } from "../Slices";

const checkPhoneAction = (phoneNumber) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await CheckUserExistenceAPI(phoneNumber);
      dispatch(setUserInfo(res));
      dispatch(setError({}));
      await AsyncStorage.setItem("phone", phoneNumber);
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setLoading(false));
      if (e.message === "Network Error") {
        dispatch(setError({ msg: e.message }));
      } else {
        console.log(e);
        dispatch(setError({ msg: e.response.status }));
      }
    }
  };
};

export default checkPhoneAction;
