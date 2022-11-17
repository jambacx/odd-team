import axios from "axios";
import omit from "lodash/omit";
import moment from "moment";
import objectKeys from "lodash/keys";
import {useState, useEffect} from "react";

import * as storage from "./storage";
import {getItem} from "./storage";

const REACT_APP_BACKEND_URL = "https://api.lsknow.ml/api/v1";

export function useFetcher() {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");
  const [response, setResponse] = useState(null);

  const fetcher = async ({url, method, body, filter, options, isSecure}) => {
    setError(null);
    setStatus("pending");

    let _url = `${url}`;

    _url = _url + `?page=1&limit=100&is_top=0&sort=list_order`;

    try {
      const _response = await doSendRequest({
        body,
        method,
        options,
        isSecure,
        url: _url
      });
      setResponse(_response);
    } catch (_error) {
      setError(_error);
    }

    setStatus("done");
  };

  return {fetcher, status, error, response};
}

export function useGet(url, isSecure = true, options = {}) {
  const {status, error, response} = useAxiosFetch({
    url,
    options,
    isSecure,
    method: "get"
  });

  return {status, error, response};
}

export function usePost(url, body, isSecure = true, options = {}) {
  const {status, error, response} = useAxiosFetch({
    url,
    body,
    options,
    isSecure,
    method: "post"
  });

  return {status, error, response};
}

export function useAxiosFetch({url, body, method, options, isSecure = true}) {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");
  const [response, setResponse] = useState({});

  useEffect(() => {
    if (!method || !url) {
      return;
    }

    const sendRequest = async (params) => {
      setError(null);
      setStatus("pending");

      try {
        const __response = await doSendRequest(params);

        setResponse(__response);
      } catch (err) {
        setError({
          message: err.message
        });
      }
      setStatus("done");
    };

    sendRequest({method, url, body, isSecure, options});
  }, [url]);

  return {status, response, error};
}

async function doSendRequest({url, method, body, options, isSecure = true}) {
  const params = {
    url: `${REACT_APP_BACKEND_URL}${url}`,
    method: `${method}`.toLowerCase(),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    ...(["put", "post"].indexOf(method) > -1 ? {data: body} : {})
  };

  // if (isSecure) {
  //   const merchantId = storage.getItem("current_merchant");
  //   const accessToken = storage.getItem("access_token");

  //   if (!accessToken && options.strict_secure_mode === true) {
  //     return;
  //   }

  //   if (accessToken) {
  //     params.headers["merchant-id"] = merchantId;
  //     params.headers["access-token"] = accessToken;
  //     params.headers["Authorization"] = `Bearer ${accessToken}`;

  //     if (params.data) {
  //       params.data.shop_id = merchantId;
  //     }
  //   }
  // }

  try {
    const {data, headers, status} = await axios(params);

    if (!data?.body?.error_msg && data?.body?.success) {
      return omit(data?.body, "status");
    } else {
      throw {response: {data: data || {}, headers, status}};
    }
  } catch (error) {
    let parsed_err = new Error("axios_error");
    parsed_err.error_type = "generic_error";
    parsed_err.error_message = error.message;

    if (error.response) {
      parsed_err.error_type = "server_error";
      parsed_err.error_message =
        (error.response.data || {}).message || "server error";

      if (400 <= error.response.status < 500) {
        parsed_err.error_type = "auth_error";
      }

      if (process.env.NODE_ENV === "development") {
        console.log(
          `SERVER ERROR: code:${error.response.status}, ${JSON.stringify(
            error.response.data || {}
          )}`
        );
      }
    }

    console.error(parsed_err);

    throw parsed_err;
  }
}
