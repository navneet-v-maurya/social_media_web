//module imports
import { createSlice } from "@reduxjs/toolkit";

const local_data = localStorage.getItem("user");
const user = local_data ? JSON.parse(local_data) : null;

const initial_state = {
  user: user ? user : null,
  logged_in: user ? true : false,
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
      state.error = null;
      state.loading = true;
    },
    success: (state, action) => {
      state.user = action.payload;
      state.logged_in = true;
      state.error = null;
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    error: (state, action) => {
      state.user = null;
      state.logged_in = false;
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.logged_in = false;
      state.error = null;
      state.loading = false;
      localStorage.clear();
    },
  },
});

export const { loading, success, error } = auth_slice.actions;

export default auth_slice.reducer;
