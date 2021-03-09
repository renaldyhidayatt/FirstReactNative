import { combineReducers, createStore } from "redux";
import { reducer } from "./search.reducer";
import { themeReducer } from "./theme.reducer";

export const rootReducer = combineReducers({
  cardData: reducer,
  myDarkMode: themeReducer,
});
