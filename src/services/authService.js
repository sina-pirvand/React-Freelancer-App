import http from "./httpService";

export const getOtp = (data) => {
  // date = {phoneNumber:"09..."}
  return http.post("/user/get-otp", data);
};

export const checkOtp = (data) => {
  return http.post("/user/check-otp", data);
};
