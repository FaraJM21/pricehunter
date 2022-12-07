import { configureStore } from "@reduxjs/toolkit";
import picture from "./ImageReducer";
export const store = configureStore({
  reducer: {
    picture,
  },
});
