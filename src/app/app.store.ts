import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter.slice';
import { startWarsAPI } from '../shared/services/star-wars.service';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [startWarsAPI.reducerPath]: startWarsAPI.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(startWarsAPI.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
