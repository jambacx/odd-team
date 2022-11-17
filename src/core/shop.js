import { useFetcher } from "./lib/fetch-hooks";

export function useShopFetcher() {
  const { status, error, response, fetcher } = useFetcher();

  return {
    status,
    error,
    response,
    detailShop: (uid) =>
      fetcher({
        method: "get",
        url: `/merchant/shops/by-uid/${uid}`,
      }),
  };
}

export function useShopUpdater() {
  const { status, error, response, fetcher } = useFetcher();
  const defaults = { status: "enabled" };

  return {
    status,
    error,
    createShop: (myshop) =>
      fetcher({
        method: "post",
        url: `/merchant/shops/create`,
        body: {
          ...myshop,
        },
      }),

    updateShop: ({ merchantShop }) =>
      fetcher({
        method: "post",
        url: `/merchant/shops/update`,
        body: { ...merchantShop, ...defaults },
      }),

    updatePaymentOptions: ({ merchantShop }) =>
      fetcher({
        method: "post",
        url: `/merchant/options/update-payment-options`,
        body: { ...merchantShop, ...defaults },
      }),
    updateDeliveryOptions: ({ merchantShop }) =>
      fetcher({
        method: "post",
        url: `/merchant/options/update-delivery-options`,
        body: { ...merchantShop },
      }),
    updateMetafieldConfig: ({ merchantShop }) =>
      fetcher({
        method: "post",
        url: `/merchant/options/update-metafield-options`,
        body: { ...merchantShop, ...defaults },
      }),
    removeShop: ({ id }) =>
      fetcher({
        method: "post",
        url: `/merchant/shops/remove`,
        body: { id },
      }),
    passwordChanger: ({ current_password, new_password }) =>
      fetcher({
        method: "post",
        url: `/user/users/change-password`,
        body: { current_password, new_password },
      }),
  };
}
