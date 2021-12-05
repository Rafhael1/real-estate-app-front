/** @format */

import { configureStore } from '@reduxjs/toolkit'
import reducers from 'pages/reducers'

export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
