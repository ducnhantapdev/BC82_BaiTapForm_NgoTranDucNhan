import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./slice/student.slice";

export const store = configureStore({
  reducer: {
    hoTen: () => {
      return "Nhan";
    },
    studentSlice,
  },
});
