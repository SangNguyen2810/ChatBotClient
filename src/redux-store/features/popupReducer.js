import { createSlice } from "@reduxjs/toolkit";

export const popupManager = createSlice({
  name: "popupManager",
  initialState: {
    isShowing: false,
  },
  reducers: {
    show: (state, action) => {
      return { isShowing: true };
    },

    hide: (state, action) => {
      return { isShowing: false };
    },
  },
});

export const { show, hide } = popupManager.actions;

export default popupManager.reducer;
