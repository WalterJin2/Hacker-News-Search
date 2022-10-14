import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: "https://hn.algolia.com/api/v1",
});



export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Itm", "User"],
  endpoints: (builder) => ({}),
});