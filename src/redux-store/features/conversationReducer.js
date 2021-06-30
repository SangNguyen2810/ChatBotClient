import {createSlice} from '@reduxjs/toolkit'

export const conversation = createSlice({
  name: 'userInfo',
  initialState: {
    loading: true,
    convs: []
  },
  reducers: {
    firstLoaded: (state, action) => {
      return action.payload;
    },

  }
})

export const {firstLoaded} = conversation.actions

export default conversation.reducer