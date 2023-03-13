import { getDonationsApi } from "../../lib";
import { setLoading, setDonations } from "../Slices";

export const getDonations = () => {
    return async (dispatch) => {
        console.log("donation");
        try {
            dispatch(setLoading(true));
            const res = await getDonationsApi();
            if (res) {
                dispatch(setLoading(false));
                dispatch(setDonations(res.data));
            }
        } catch (e) {
            dispatch(setLoading(false));
            console.log(e)
        };
    }
}