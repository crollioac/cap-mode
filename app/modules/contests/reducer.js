import { AsyncStorage } from 'react-native';

import * as at from './actionTypes';

let initialState = { contests: [] };

const contestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.GET_CONTESTS:
            let { contests } = action;
            // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['contests', JSON.stringify(contests)]
            ]);

            return { ...state, contests };

        case at.SET_SELECTED_CONTEST:
            const { contest } = action;
            return { ...state, contest };

        default:
            return state;
    }
};

export default contestsReducer;
