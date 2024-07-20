import { configureStore } from '@reduxjs/toolkit';
import { selectedItems } from '../features/selectedItems/selectedItems.slice';
import { theme } from '../features/theme/theme.slice';
import { startWarsAPI } from '../shared/services/star-wars.service';

export const store = configureStore({
  reducer: {
    selectedItems: selectedItems.reducer,
    theme: theme.reducer,
    [startWarsAPI.reducerPath]: startWarsAPI.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(startWarsAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
