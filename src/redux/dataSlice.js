import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./actions";

const initialState = {
  isLoading: false,
  isError: null,
  data: null,
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
  },
});

export default dataSlice.reducer;
