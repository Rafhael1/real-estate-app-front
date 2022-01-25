import { configureStore } from '@reduxjs/toolkit';
import reducers from 'Pages/slices';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware({ immutableCheck: { ignoredPaths: 'form' } })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
