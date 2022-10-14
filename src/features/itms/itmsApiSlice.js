import { apiSlice } from "../../app/api/apiSlice";

export const itmsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItms: builder.query({
      query: (params) => ({
        url: `/${params}`,
        method: "GET",
        mode: "cors",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
    }),
  }),
});

export const {
  useGetItmsQuery,
} = itmsApiSlice;
