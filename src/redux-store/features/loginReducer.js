import {createSlice} from '@reduxjs/toolkit'

export const loginInfoSlice = createSlice({
  name: 'login',
  initialState: {
    info: {}
  },
  reducers: {
    logIn: (state, action) => {
      const {info} = action.payload;
      state.info = info;
    },
    logOut: (state, action) => {
      state.info = {}
    },

  }
})

export const {logIn, logOut} = loginInfoSlice.actions

export default loginInfoSlice.reducer