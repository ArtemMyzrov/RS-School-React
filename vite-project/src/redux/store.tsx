import { DeepPartial, configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './features/search/searchSlice';
import { formSlice } from './features/form/formSlice';

export const createStore = (preloadedState: DeepPartial<object> = {}) => {
  return configureStore({
    reducer: {
      search: searchSlice.reducer,
      form: formSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: true,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
