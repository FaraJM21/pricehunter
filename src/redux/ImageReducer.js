const { createSlice } = require("@reduxjs/toolkit");
const Imageslice = createSlice({
  name: "image",
  initialState:{img:""},
  reducers: {
    getImg: (state, action) => {
      state.img = action.payload;
    },
  },
});

export const { getImg } = Imageslice.actions;
export default Imageslice.reducer;
