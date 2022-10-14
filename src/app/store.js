import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import itmsReducer from "../features/itms/itmsSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    itms: itmsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});


