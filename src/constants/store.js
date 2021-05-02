import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userHandle";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});