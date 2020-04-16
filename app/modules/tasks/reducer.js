import { AsyncStorage } from 'react-native';

import * as at from './actionTypes';
import * as TASKS from './constants';

let initialState = { tasks: {}, task: { key: TASKS.LANDING_VIEW } };

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.GET_TASKS:
            let { tasks } = action;
            // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['tasks', JSON.stringify(tasks)]
            ]);

            return { ...state, tasks };
        case at.NEW_TASK:
            let { task } = action;
            // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['tasks', JSON.stringify(tasks)]
            ]);

            return { ...state, task };

        default:
            return state;
    }
};

export default tasksReducer;