import { onBoardingApi } from "../../lib";
import { setLoading } from "../Slices/loadingSlice";

export const onBoardnewCustomer = () => {
  return async (dispatch) => {
    console.log("onBoardnewCustomer");
    try {
      dispatch(setLoading(true));
      const res = await onBoardingApi();
      if (res) {
        dispatch(setLoading(false));
      }
    } catch (e) {
      dispatch(setLoading(false));
      console.log(e);
    }
  };
};
