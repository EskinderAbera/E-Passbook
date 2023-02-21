import axiosMain from 'axios';

export const axios = axiosMain.create({
    baseURL: process.env.BASEURL
});