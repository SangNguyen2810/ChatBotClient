import {createSlice} from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {

  },
  reducers: {
    logIn: (state, action) => {
      return action.payload;
    },
    logOut: (state, action) => {
      state = {}
    },

  }
})

export const {logIn, logOut} = user.actions

export default user.reducer