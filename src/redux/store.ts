import { configureStore } from '@reduxjs/toolkit'
import reducers from 'pages/slices'

export const store = configureStore({
  reducer: reducers,
   // @ts-ignore
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: { ignoredPaths: 'form' }, })
  })
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch