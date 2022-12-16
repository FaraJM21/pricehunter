import { configureStore } from "@reduxjs/toolkit";
import picture from "./ImageReducer";
import modal from "./ModalReducer";
export const store = configureStore({
  reducer: {
    picture,
    modal,
  },
});
