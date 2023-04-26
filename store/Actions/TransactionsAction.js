import { setError } from "../Slices/loadingSlice";
import { setStatements, setIsLoaded } from "../Slices/TransactionSlice";
import { transactions } from "../../lib/api-calls/Transactions";

const TransactionsAction = (acct) => {
  return async (dispatch) => {
    try {
      const res = await transactions(acct);
      dispatch(setStatements(res));
      dispatch(setIsLoaded(false));
      dispatch(setError(""));
    } catch (e) {
      // console.log("tra", e);
      if (e.message === "Network Error") {
        dispatch(setError(e.message));
      } else {
        dispatch(setError(e.response.data)); //check this one
      }
    }
  };
};

export default TransactionsAction;
