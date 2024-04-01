import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./slices/locations/locationSlice";

const store = configureStore({
  reducer: {
    location: locationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
