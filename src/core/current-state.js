import {createSelector} from "reselect";
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import * as storage from "./lib/storage";
import * as constants from "../constants";
import {useGet} from "./lib/fetch-hooks";
import {getItem} from "./lib/storage";

const REACT_APP_CURRENT_USER_KEY = "current_user",
  REACT_APP_CURRENT_MERCHANT_KEY = "current_merchant";
const selectCurrentUser = createSelector(
  (appState) => appState[constants.NAME] || {},
  (state) => state.currentUser
);

const selectCurrentMerchant = createSelector(
  (appState) => appState[constants.NAME] || {},
  (state) => state.currentMerchant
);

const selectRouter = createSelector(
  (appState) => appState.router || {},
  (router) => router.location || {}
);

/*
  Select current logged in user from state
*/
export function useCurrentUser() {
  const currentUser = useSelector(selectCurrentUser);
  return currentUser;
}

/*
  Select current selected merchant from state
*/
export function useCurrentMerchant() {
  const currentMerchant = useSelector(selectCurrentMerchant);
  return currentMerchant;
}

/*
  Select current router from state
*/
export function useRouter() {
  const router = useSelector(selectRouter);
  return router;
}

/*
  Refetch current user information and update local storage.
*/
export function useCurrentUserFetcher() {
  const dispatch = useDispatch();
  const {status, error, response} = useGet("/user/users/user-info", true, {
    strict_secure_mode: true
  });

  useEffect(() => {
    if (!error && response && status === "done") {
      storage.setItem(REACT_APP_CURRENT_USER_KEY, response, true);
      dispatch({
        type: constants.SET_CURRENT_USER,
        payload: response
      });
    }
  }, [status]);

  return {status, error};
}

/*
  Refetch current merchant information and update local storage.
*/
export function useCurrentMerchantFetcher() {
  const dispatch = useDispatch();
  const {status, error, response} = useGet("/merchant/shops/list", true, {
    strict_secure_mode: true
  });

  let shopIndex = getItem("current_shop");

  useEffect(() => {
    if (!error && status === "done") {
      if (response && response.shops.length) {
        if (!shopIndex) {
          shopIndex = 0;
          dispatch({
            type: constants.SET_CURRENT_SHOP,
            payload: 0
          });
          storage.setItem("current_shop", 0);
        }
        storage.setItem(
          REACT_APP_CURRENT_MERCHANT_KEY,
          response.shops[shopIndex].id,
          true
        );
        dispatch({
          type: constants.SET_CURRENT_MERCHANT,
          payload: response.shops[shopIndex]
        });
      }
    }
  }, [status]);

  // useEffect(() => {
  //   if (response) {
  //     fetching = "done";
  //   }
  // }, [response]);

  return {error, status, response};
}

/*
  Refetch app state.
*/

export function useAppStateFetch() {
  const {error: userError, status: userStatus} = useCurrentUserFetcher();

  const {
    status: merchantStatus,
    error: merchantError,
    response: merchantResponse
  } = useCurrentMerchantFetcher();

  return {userStatus, merchantStatus, merchantResponse};
}
