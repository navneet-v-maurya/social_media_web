import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  user: null,
  logged_in: false,
  loading: false,
  error: null,
};

export const auth_slice = createSlice({
  name: "auth",
  initialState: initial_state,
  reducers: {
    loading: (state) => {
      state.user = null;
      state.logged_in = false;
      state.error = false;
      state.loading = true;
    },
    success: (state, action) => {
      state.user = action.user;
      state.logged_in = true;
      state.error = false;
      state.loading = false;
    },
    error: (state) => {
      state.user = null;
      state.logged_in = false;
      state.error = true;
      state.loading = false;
    },
  },
});

export const { loading, success, error } = auth_slice.actions;

export default auth_slice.reducer;
