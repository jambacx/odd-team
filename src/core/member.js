import {useFetcher} from "./lib/fetch-hooks";

export function useMemberFetcher() {
  const {status, error, response, fetcher} = useFetcher();

  return {
    status,
    error,
    response,
    userList: ({filter, options}) =>
      fetcher({
        filter,
        options,
        method: "get",
        url: `/users`
      }),
    detail: (id) =>
      fetcher({
        method: "get",
        url: `/portfolio/${id}`,
        params: {id}
      })
  };
}
