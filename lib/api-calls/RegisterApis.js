import { axiosConfig } from "../axios";

export const checkUser = async (username) => {
  console.log("checkUser");
  var data = JSON.stringify({
    phoneNumber: username,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/auth/checkUserExistence",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axiosConfig(config)
    .then(function (response) {
      console.log(JSON.stringify(response.headers));
      // return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
