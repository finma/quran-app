import { combineReducers } from "redux";
import { surahReducer } from "./surahReducer";

const reducer = combineReducers({ surahReducer });

export default reducer;

export type RootReducer = ReturnType<typeof reducer>;
