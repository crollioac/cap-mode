import { combineReducers } from 'redux';

import { reducer as authReducer } from "../modules/auth";
import { reducer as homeReducer } from "../modules/home";
import { reducer as matchesReducer } from "../modules/matches";
import { reducer as globalReducer } from "../modules/global";

// Combine all the reducers
const rootReducer = combineReducers({ authReducer, homeReducer, matchesReducer, globalReducer });

export default rootReducer;
