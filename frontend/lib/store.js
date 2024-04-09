import { configureStore } from '@reduxjs/toolkit'
import applicationSlice from './features/application/applicationSlice'

export const store = configureStore({
  reducer: {
    app: applicationSlice
  },
})