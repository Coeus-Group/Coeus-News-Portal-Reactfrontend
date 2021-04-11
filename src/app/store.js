import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userHandle";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
