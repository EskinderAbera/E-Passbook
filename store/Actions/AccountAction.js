import { getAccountList } from "../../lib";
import { setAccounts } from "../Slices";

export const getAccount = ({ username }) => {
  return async (dispatch) => {
    try {
      const res = await getAccountList(username);
      dispatch(setAccounts(res));
    } catch (e) {
      () => console.log(e);
    }
  };
};
