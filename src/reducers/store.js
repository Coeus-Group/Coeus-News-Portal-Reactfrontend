import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../constants/userHandle";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
