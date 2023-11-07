import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouritesReducer";
import getJobReducer from "../reducers/getJobReducer";

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  jobs: getJobReducer,
});
const store = configureStore({
  reducer: bigReducer,
});

export default store;
