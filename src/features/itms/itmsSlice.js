import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
  searchType: "All",
  sortOrder: "Popularity",
  dataRange: "All time",
  hitsPerPage: 20,
  query: "",
  input: "",
};
const itmsSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    toggleShowSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
    setsearchType(state, action) {
      state.searchType = action.payload;
    },
    setsortOrder(state, action) {
      state.sortOrder = action.payload;
    },
    setdataRange(state, action) {
      state.dataRange = action.payload;
    },
    sethitsPerPage(state, action) {
      state.hitsPerPage = action.payload;
    },
    setquery(state, action) {
      state.query = state.input;
    },
    setInput(state, action) {
      state.input = action.payload;
    },
  },
});

export const {
  toggleShowSidebar,
  setsearchType,
  setsortOrder,
  setdataRange,
  sethitsPerPage,
  setquery,
  setInput,
} = itmsSlice.actions;

export default itmsSlice.reducer;
