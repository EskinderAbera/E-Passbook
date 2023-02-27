import { axiosConfig } from "./axios";
import { BASE_URL } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// function setCurrentTokenState(tokenState) {
//     AsyncStorage.setItem("AuthToken", JSON.stringify(tokenState));
// }

// function getCurrentTokenState() {
//     const AuthToken = AsyncStorage.getItem("AuthToken");
//     const tokenObj = JSON.parse(AuthToken);
//     return tokenObj;
// }

// function refreshToken() {
//     const current = getCurrentTokenState();
//     return axiosConfig.post(
//         `${BASE_URL}/api/tokens/refresh`,
//         {
//             token: current?.token,
//             refreshToken: current?.refreshToken,
//         },
//         {
//             headers: {

//             },
//         }
//     );
// }

const setUpInterceptor = async () => {
    const token = await AsyncStorage.getItem("AuthToken");
    console.log(token);
    // axiosConfig.interceptors.request.use()
    axiosConfig.interceptors.request.use(
        async (config) => {
            console.log('Interceptor function called');
            // console.log(config);
            if (token) {
                const formattedToken = token.replace(/['"]+/g, "");
                config.headers = {
                    ...config.headers,
                    Authorization: `Bearer ${formattedToken}`,
                };
            }
            return config;
        },
        (error) => {
            // Handle any errors that occur during the request
            return "Promise.reject(error)";
        }
    )

};

export default setUpInterceptor;
