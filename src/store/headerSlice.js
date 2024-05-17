import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    headerData: true
  },
  reducers: {
    saveHeaderData(state, action) {
      return {
        ...state,
        headerData: action.payload
      };
    }
  }
});

export const { saveHeaderData } = headerSlice.actions;
export default headerSlice.reducer;