import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './features/search/searchSlice';
import { formSlice } from './features/form/formSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    form: formSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
