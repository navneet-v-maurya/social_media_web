//module imports
import { configureStore } from "@reduxjs/toolkit";

//component imports
import authReducer from "./authReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
