import { createSlice } from "@reduxjs/toolkit";
import { POPUP_TYPE } from "../../constant/PopupType";

export const popupManager = createSlice({
  name: "popupManager",
  initialState: {
    isShowing: false,
    type: ''
  },
  reducers: {
    show: (state, action) => {
      return { isShowing: true, type: action.payload.popupType };
    },

    hide: (state, action) => {
      return { isShowing: false, type: '' };
    },
  },
});

export const { show, hide } = popupManager.actions;

export default popupManager.reducer;
