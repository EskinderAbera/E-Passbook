import { getAccountList } from "../../lib";
import { setAccounts, setNedajRes } from "../Slices";
import { nedajApi } from "../../lib/api-calls/nedajApi";

export const nedajAction = ({ username }) => {
  return async (dispatch) => {
    try {
      const res = await nedajApi(username);
      dispatch(setNedajRes(res));
    } catch (e) {
      () => console.log(e);
    }
  };
};
