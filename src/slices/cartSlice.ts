import { createSlice } from "@reduxjs/toolkit";

import { WorkshopData } from "types";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    workshops: [] as WorkshopData[],
  },
  reducers: {
    addWorkshopsToCart: (state, action) => {
      state.workshops = [...state.workshops, action.payload];
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addWorkshopsToCart } = actions;

export default reducer;
