import { axios } from '../axios';


export const getAccountList = async ({ username }) => {
    const res = await axios.get(`${BASE_URL}/${username}`)
    return res;
}