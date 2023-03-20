import {
  setCategory,
  setAccount,
  setError,
  setType,
  setAmount,
  setReceiverAccount,
  setRecords,
} from "../Slices";
// import { fetchAccounts } from "../../lib/api-calls/fetchAccounts";

export const chooseAccount = (account) => {
  return async (dispatch) => {
    try {
      //   const res = await fetchAccounts(username);
      dispatch(setAccount(account));
      //   dispatch(setIsLoaded(false));
      //   dispatch(setError({}));
    } catch (e) {
      //   if (e.message === "Network Error") {
      //     dispatch(setError({ msg: e.message }));
      //   } else {
      //     dispatch(setError({ msg: e.response.data }));
      //   }
    }
  };
};

export const chooseReceiverAccount = (account) => {
  return async (dispatch) => {
    try {
      //   const res = await fetchAccounts(username);
      dispatch(setReceiverAccount(account));
      //   dispatch(setIsLoaded(false));
      //   dispatch(setError({}));
    } catch (e) {
      //   if (e.message === "Network Error") {
      //     dispatch(setError({ msg: e.message }));
      //   } else {
      //     dispatch(setError({ msg: e.response.data }));
      //   }
    }
  };
};

export const chooseCategory = (category) => {
  return async (dispatch) => {
    try {
      //   const res = await fetchAccounts(username);
      dispatch(setCategory(category));
      //   dispatch(setIsLoaded(false));
      //   dispatch(setError({}));
    } catch (e) {
      //   if (e.message === "Network Error") {
      //     dispatch(setError({ msg: e.message }));
      //   } else {
      //     dispatch(setError({ msg: e.response.data }));
      //   }
    }
  };
};

export const setAmountAction = (amount) => {
  return async (dispatch) => {
    try {
      //   const res = await fetchAccounts(username);
      dispatch(setAmount(amount));
      //   dispatch(setIsLoaded(false));
      //   dispatch(setError({}));
    } catch (e) {
      //   if (e.message === "Network Error") {
      //     dispatch(setError({ msg: e.message }));
      //   } else {
      //     dispatch(setError({ msg: e.response.data }));
      //   }
    }
  };
};

export const chooseType = (type) => {
  return async (dispatch) => {
    try {
      //   const res = await fetchAccounts(username);
      dispatch(setType(type));
      //   dispatch(setIsLoaded(false));
      //   dispatch(setError({}));
    } catch (e) {
      //   if (e.message === "Network Error") {
      //     dispatch(setError({ msg: e.message }));
      //   } else {
      //     dispatch(setError({ msg: e.response.data }));
      //   }
    }
  };
};

export const changeRecords = (records) => {
  return async (dispatch) => {
    try {
      //   const res = await fetchAccounts(username);
      dispatch(setRecords(records));
      //   dispatch(setIsLoaded(false));
      //   dispatch(setError({}));
    } catch (e) {
      //   if (e.message === "Network Error") {
      //     dispatch(setError({ msg: e.message }));
      //   } else {
      //     dispatch(setError({ msg: e.response.data }));
      //   }
    }
  };
};
