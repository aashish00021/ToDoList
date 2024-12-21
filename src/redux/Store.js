import { configureStore} from '@reduxjs/toolkit'
import addReducer from './AddSlice'

export const store = configureStore({
  reducer: {
    add: addReducer,
  },
})