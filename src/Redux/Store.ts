import { configureStore } from '@reduxjs/toolkit';
import reducers from 'Redux/Slices';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // @ts-ignore
      immutableCheck: { ignoredPaths: 'form' },
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
