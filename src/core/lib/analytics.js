import Analytics from "analytics";
import MobileDetect from "mobile-detect";

import { post } from "./fetchUtils";
import { getItem } from "@lib/storage";

/* initialize analytics and load plugins */
const analytics = Analytics({
  debug: true,
  plugins: [
    zochilProviderPlugin({
      xyz: "123",
    }),
  ],
});

function zochilProviderPlugin(userConfig = {}) {
  return {
    config: userConfig,
    NAMESPACE: "zochil-analytics",
    page: ({ payload }) => {
      if (process.browser) {
        pageview({
          url: payload.properties.path,
          search: payload.properties.search,
          anonymous_id: payload.anonymousId,
          referrer: payload.properties.referrer,
          screen_size: payload.properties.width,
        })
          .then(() => true)
          .catch(() => true);
      }
    },
    track: ({ payload }) => {
      if (process.browser) {
        trackEvent({
          event: payload.event,
          anonymous_id: payload.anonymousId,
          post_id: payload.properties.post_id,
          order_id: payload.properties.order_id,
          account_id: payload.properties.account_id,
          product_id: payload.properties.product_id,
          merchant_id: payload.properties.merchant_id,
        })
          .then(() => true)
          .catch(() => true);
      }
    },
    identify: ({ payload }) => {},
    loaded: () => true,
  };
}

async function trackEvent({
  event,
  post_id,
  order_id,
  account_id,
  product_id,
  merchant_id,
  anonymous_id,
}) {
  try {
    if (event && merchant_id) {
      await post("/analytics/analytics/track-event", {
        event,
        merchant_id,
        post_id,
        order_id,
        account_id,
        product_id,
        anonymous_id,
      });
    }
  } catch (err) {
    console.error(err);
  }
}

async function pageview({ url, search, referrer, screen_size, anonymous_id }) {
  try {
    const account_id = await getAccountId();
    const md = new MobileDetect(window.navigator.userAgent);
    const params = {
      url,
      search,
      referrer,
      account_id,
      screen_size,
      anonymous_id,
      is_bot: md.is("bot"),
      os: (md.os() || "").toLowerCase(),
      domain: window.location.hostname,
    };

    for (const platform of ["iOS", "Android", "Edge", "Chrome"]) {
      if (md.versionStr(platform)) {
        params[`${platform.toLowerCase()}_version`] = md.versionStr(platform);
      }
    }

    await post("/analytics/analytics/pageview", params, false);
  } catch (err) {
    console.error(err);
  }
}

async function getAccountId() {
  let account_id = undefined;
  try {
    const currentUser = await getItem("current_user", true);
    if (currentUser) {
      account_id = currentUser.id;
    }
  } catch (err) {}

  return account_id;
}

if (process.browser) {
  if (typeof window !== "undefined") {
    window.Analytics = analytics;
  }
}

export default analytics;
