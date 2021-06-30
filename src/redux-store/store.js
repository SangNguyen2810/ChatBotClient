import { configureStore } from '@reduxjs/toolkit'
import userInfo from './features/userReducer'
import convInfo from './features/conversationReducer'
export default configureStore({
  reducer: {
    userInfo,
    convInfo
  }
})