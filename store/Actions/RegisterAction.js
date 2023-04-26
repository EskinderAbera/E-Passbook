import { checkUser } from "../../lib";

export const checkUserExistance = (phoneNumber) => {
  return async (dispatch) => {
    console.log("reached");
    try {
      const res = await checkUser(phoneNumber);
    } catch (e) {
      () => console.log(e);
    }
  };
};
