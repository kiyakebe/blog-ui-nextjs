import { blogsAPI } from "@/lib/redux/api/blogsAPI";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [blogsAPI.reducerPath]: blogsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(blogsAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
