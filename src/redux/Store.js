import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice.js'

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})