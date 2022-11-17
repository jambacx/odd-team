import { useFetcher } from './lib/fetch-hooks';

export function useUserFetcher() {
  const { status, error, response, fetcher } = useFetcher();

  return {
    status,
    error,
    response,
    list: ({ filter, options }) => fetcher({
      filter,
      options,
      method: "get",
      url: `/merchant/customers/list-accounts`,
    }),
  };
}