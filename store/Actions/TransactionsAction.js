import { setError } from "../Slices";
import { setStatements, setIsLoaded } from "../Slices/TransactionSlice";
import { transactions } from "../../lib/api-calls/Transactions";

const TransactionsAction = (acct) => {
  return async (dispatch) => {
    try {
      const res = await transactions(acct);
      console.log("res", res);
      dispatch(setStatements(res));
      dispatch(setIsLoaded(false));
      dispatch(setError({}));
    } catch (e) {
      // console.log("tra", e);
      if (e.message === "Network Error") {
        dispatch(setError({ msg: e.message }));
      } else {
        dispatch(setError({ msg: e.response.data }));
      }
    }
  };
};

export default TransactionsAction;
