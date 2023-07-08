import { configureStore } from "@reduxjs/toolkit";
import { meteorReducer } from "./meteorReducer";

export const store = configureStore({
  reducer: {
    meteors: meteorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
