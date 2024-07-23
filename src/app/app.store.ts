import { configureStore } from '@reduxjs/toolkit';
import { viewedSlice } from '../features/viewedCard/viewedCard.slice';
import { startWarsAPI } from '../shared/services/star-wars.service';

export const store = configureStore({
  reducer: {
    viewed: viewedSlice.reducer,
    [startWarsAPI.reducerPath]: startWarsAPI.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(startWarsAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
