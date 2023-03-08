import { setError } from "../Slices";
import { setStatements, setIsLoaded } from "../Slices/TransactionSlice";
import { transactions } from "../../lib/api-calls/Transactions";

const TransactionsAction = (acct) => {
  return async (dispatch) => {
    try {
      const res = await transactions(acct);
      dispatch(setStatements(res));
      dispatch(setIsLoaded(false));
      dispatch(setError({}));
    } catch (e) {
      if (e.message === "Network Error") {
        dispatch(setError({ msg: e.message }));
      } else {
        dispatch(setError({ msg: e.response.data }));
      }
    }
  };
};

export default TransactionsAction;
