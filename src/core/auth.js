// import omit from "lodash/omit";
// import {useDispatch} from "react-redux";
// import {useState, useEffect} from "react";

// import * as storage from "@lib/storage";
// import * as constants from "../constants";
// import {useFetcher} from "@lib/fetch-hooks";

// const {
//   REACT_APP_CURRENT_USER_KEY = "current_user",
//   REACT_APP_CURRENT_USER_TOKEN_KEY = "access_token",
//   REACT_APP_CURRENT_MERCHANT_KEY = "current_merchant",
//   REACT_APP_CURRENT_SHOP_INDEX = "current_shop",
//   REACT_APP_CURRENT_STATUS = "status"
// } = process.env;

// export function useLogin() {
//   const dispath = useDispatch();
//   const {status, error, response, fetcher} = useFetcher();

//   useEffect(() => {
//     if (status === "done" && !error && response) {
//       if (response.access_token) {
//         storage.setItem(
//           REACT_APP_CURRENT_USER_KEY,
//           omit(response, "access_token"),
//           true
//         );

//         storage.setItem(
//           REACT_APP_CURRENT_USER_TOKEN_KEY,
//           response.access_token
//         );

//         storage.setItem(REACT_APP_CURRENT_MERCHANT_KEY, response.access_token);

//         dispath({
//           type: constants.SET_CURRENT_USER,
//           payload: omit(response, "access_token")
//         });
//       }
//       document.location.href = "/";
//     }
//   }, [status, error, response]);

//   return {
//     status,
//     error,
//     login: ({phone, password}) =>
//       fetcher({
//         method: "post",
//         isSecure: false,
//         url: "/user/users/login",
//         body: {phone, password}
//       })
//   };
// }

// export function useLogout() {
//   const dispath = useDispatch();
//   const {status, error, fetcher} = useFetcher();

//   useEffect(() => {
//     if (status === "done") {
//       storage.removeItem(REACT_APP_CURRENT_USER_KEY);
//       storage.removeItem(REACT_APP_CURRENT_MERCHANT_KEY);
//       storage.removeItem(REACT_APP_CURRENT_USER_TOKEN_KEY);
//       storage.removeItem(REACT_APP_CURRENT_SHOP_INDEX);
//       storage.removeItem(REACT_APP_CURRENT_STATUS);

//       dispath({
//         type: constants.SET_CURRENT_USER,
//         payload: null
//       });

//       document.location.href = "/login";
//     }
//   }, [status, error]);

//   return {
//     error,
//     status,
//     logout: () =>
//       fetcher({
//         method: "post",
//         url: "/user/users/logout"
//       })
//   };
// }

// export function useRegisterWithPhone() {
//   const {status, error, fetcher} = useFetcher();

//   const go_register = ({phone, first_name, last_name}) =>
//     fetcher({
//       method: "post",
//       isSecure: false,
//       url: "/user/users/register-with-phone",
//       body: {phone, last_name, first_name}
//     });

//   return {go_register, status, error};
// }

// export function useResetPassword() {
//   const {status, error, fetcher} = useFetcher();

//   const reset_password = ({phone}) =>
//     fetcher({
//       method: "post",
//       isSecure: false,
//       url: "/user/users/reset-password",
//       body: {phone}
//     });

//   return {reset_password, status, error};
// }

// export function useVerifyPhone() {
//   const dispath = useDispatch();
//   const {status, error, response, fetcher} = useFetcher();

//   useEffect(() => {
//     if (status === "done" && !error && response) {
//       if (response.access_token) {
//         storage.setItem(
//           REACT_APP_CURRENT_USER_KEY,
//           omit(response, "access_token"),
//           true
//         );

//         storage.setItem(
//           REACT_APP_CURRENT_USER_TOKEN_KEY,
//           response.access_token
//         );

//         storage.setItem(REACT_APP_CURRENT_MERCHANT_KEY, response.access_token);

//         dispath({
//           type: constants.SET_CURRENT_USER,
//           payload: omit(response, "access_token")
//         });
//       }
//     }
//   }, [status, error, response]);

//   const verify = ({phone, otp, password}) =>
//     fetcher({
//       method: "post",
//       isSecure: false,
//       url: "/user/users/verify-phone",
//       body: {phone, otp, password}
//     });

//   return {verify, status, error};
// }

// export function useMyPhone() {
//   const dispath = useDispatch();
//   const {status, error, response, fetcher} = useFetcher();

//   const verify = ({phone, otp, password}) =>
//     fetcher({
//       method: "post",
//       isSecure: false,
//       url: "/user/users/verify-phone",
//       body: {phone, otp, password}
//     });

//   return {verify, status, error};
// }
