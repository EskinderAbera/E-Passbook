import { axiosConfig } from "../axios";

export const onBoardingApi = async () => {
    console.log("onBoardingApi");
    var data = JSON.stringify({

    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '/api/auth/checkUserExistence',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axiosConfig(config)
        .then(function (response) {
            console.log(JSON.stringify(response.headers));
            // return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });

}