import axios from "axios";
import omit from "lodash/omit";

import * as storage from "@lib/storage";

const { REACT_APP_BACKEND_URL } = process.env;
// const {
//   publicRuntimeConfig: { BACKEND_URL, IN_ZOCHIL_SERVER },
// } = getConfig();

export async function get(url, isSecure = true, isLocal = false, params = {}) {
  return await _sendRequest(url, isSecure, isLocal, {
    method: "get",
    params,
  });
}

export async function post(url, data, isSecure = true) {
  return await _sendRequest(url, isSecure, false, {
    method: "post",
    data,
  });
}

async function _sendRequest(url, isSecure, isLocal, options) {
  let baseUrl = REACT_APP_BACKEND_URL;

  if (isLocal && !IN_ZOCHIL_SERVER) {
    const service_name = url.substr(1, url.substr(1).indexOf("/"));
    baseUrl = `http://${service_name}-api/v2`;
  }

  const params = {
    url: `${baseUrl}${url}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...options,
  };
  if (isSecure) {
    params.headers["access-token"] = await storage.getItem("access_token");
  }

  try {
    const { data } = await axios(params);
    if (data && data.status === "ok") {
      return omit(data, "status");
    } else {
      throw { response: { data } };
    }
  } catch (error) {
    throw new Error(JSON.stringify(error.response.data));
  }
}
