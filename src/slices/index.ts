import { combineReducers } from "@reduxjs/toolkit";

import workshopSlice from "slices/workshopSlice";
import cartSlice from "slices/cartSlice";

const rootReducer = combineReducers({
  workshops: workshopSlice,
  cart: cartSlice,
});

export default rootReducer;
