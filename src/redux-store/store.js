import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/loginReducer'

export default configureStore({
  reducer: {
    login: loginReducer
  }
})