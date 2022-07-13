import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({
    // TODO: envで指定
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
