import { createSlice } from "@reduxjs/toolkit";

import { WorkshopData } from "types";

export const workshopSlice = createSlice({
  name: "workshops",
  initialState: {
    workshops: [] as WorkshopData[],
  },
  reducers: {
    addWorkshops: (state, action) => {
      state.workshops = action.payload;
    },
  },
});

const { actions, reducer } = workshopSlice;
export const { addWorkshops } = actions;

export default reducer;
