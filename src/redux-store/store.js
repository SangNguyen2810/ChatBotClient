import { configureStore } from '@reduxjs/toolkit'
import userInfo from './features/userReducer'
import convInfo from './features/conversationReducer'
import popupManager from './features/popupReducer'
export default configureStore({
  reducer: {
    userInfo,
    convInfo,
    popupManager
  }
})