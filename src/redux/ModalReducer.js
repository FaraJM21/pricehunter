import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { open: false },
  reducer: {
    handleModal: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { handleModal } = modalSlice.actions;
export default modalSlice.reducer;
