import { AsyncStorage } from 'react-native';

import * as at from './actionTypes';

let initialState = { tasks: {} };

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.GET_TASKS:
            let { tasks } = action;
            // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['tasks', JSON.stringify(tasks)]
            ]);

            return {...state, tasks };

        default:
            return state;
    }
};

export default tasksReducer;