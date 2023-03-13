// import { axios } from '../axios';
import { axiosConfig } from "../axios";


export const getDonationsApi = async () => {
    try {
        const res = await axiosConfig.get(`/api/campaigns`)
        return res;
    } catch (e) {
        console.log(e);
    }
}