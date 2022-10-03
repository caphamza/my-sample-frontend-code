import { combineReducers } from "@reduxjs/toolkit";

import workshopSlice from "slices/workshopSlice";

const rootReducer = combineReducers({
  workshops: workshopSlice,
});

export default rootReducer;
