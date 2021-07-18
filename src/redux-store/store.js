import { configureStore } from '@reduxjs/toolkit'
import userInfo from './features/userReducer'
import channelInfo from './features/channelReducer'
import popupManager from './features/popupReducer'
export default configureStore({
  reducer: {
    userInfo,
    channelInfo,
    popupManager
  }
})