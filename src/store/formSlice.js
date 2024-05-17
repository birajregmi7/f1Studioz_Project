import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: [],
    configureFormData: {}
  },
  reducers: {
    saveConfigureFormData(state, action) {
      state.configureFormData = { ...state.configureFormData, ...action.payload };
    },
    saveFormData: (state, action) => {
      state.formData = [...state.formData, action.payload]; 
    },
    clearFormData: (state) => {
      state.formData = [];
    },
  }
});

export const { saveFormData, saveConfigureFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;