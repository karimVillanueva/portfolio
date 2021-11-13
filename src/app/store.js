import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../app/dataSlice'


export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
})