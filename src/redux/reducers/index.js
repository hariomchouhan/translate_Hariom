import { combineReducers } from "redux";
import dropdownReducer from "./dropdownReducer";
import languageReducer from "./languageReducer";
import textReducer from "./textReducer";

export const reducers=combineReducers({
    language: languageReducer,
    text: textReducer,
    dropdown: dropdownReducer
});

