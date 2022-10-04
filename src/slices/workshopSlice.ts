import { createSlice } from "@reduxjs/toolkit";

import { WorkshopData } from "types";

export const workshopSlice = createSlice({
  name: "workshops",
  initialState: {
    workshops: [] as WorkshopData[],
    category: "all",
  },
  reducers: {
    addWorkshops: (state, action) => {
      state.workshops = action.payload;
    },
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

const { actions, reducer } = workshopSlice;
export const { addWorkshops, updateCategory } = actions;

export default reducer;
