import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    type: '',
    toast: false,
    title: "",
    message: "",
  },
  reducers: {
    showToast: (state, action) => {
      if (!state.toast) {
        state.toast = true;
        state.title = action.payload.title;
        state.type = action.payload.type;
        state.message = action.payload.message;
        return;
      }
    },
    removeToast: (state, action) => {
      if (state.toast) {
        state.toast = false;
      }
    },
  },
});

export const { showToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
