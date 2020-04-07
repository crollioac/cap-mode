import { combineReducers } from 'redux';
import { reducer as globalReducer } from "../modules/global";
import { reducer as authReducer } from "../modules/auth";
import { reducer as homeReducer } from "../modules/home";
import { reducer as matchesReducer } from "../modules/matches";
import { reducer as tasksReducer } from "../modules/tasks";

// Combine all the reducers
const rootReducer = combineReducers({
    globalReducer,
    authReducer,
    homeReducer,
    matchesReducer,
    tasksReducer
});

export default rootReducer;
