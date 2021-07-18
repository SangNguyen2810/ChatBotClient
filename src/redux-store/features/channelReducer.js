import {createSlice} from '@reduxjs/toolkit'

export const channelInfo = createSlice({
  name: 'userInfo',
  initialState: {
    loading: true,
    channels: []
  },
  reducers: {
    firstLoaded: (state, action) => {
      return action.payload;
    },

  }
})

export const {firstLoaded} = channelInfo.actions

export default channelInfo.reducer