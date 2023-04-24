import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckUserExistenceAPI } from "../../lib/api-calls/CheckUser";
import { setError, setLoading } from "../Slices/loadingSlice";
import { setUserInfo } from "../Slices";

const checkPhoneAction = (phoneNumber) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await CheckUserExistenceAPI(phoneNumber);
      dispatch(setUserInfo(res.data));
      dispatch(setError({}));
      await AsyncStorage.setItem("phone", phoneNumber);
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setError(e.response.data.message));
      dispatch(setLoading(false));
    }
  };
};

export default checkPhoneAction;
