import { AsyncStorage } from 'react-native';

import * as at from './actionTypes';
import * as mockData from "./mockData";

let initialState = { matches: [] };

const matchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.GET_MATCHES:
            let { matches } = action;
            // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['matches', JSON.stringify(matches)]
            ]);

            return {...state, matches };

        case at.MATCH_LIST_UPDATE:
            
            matches = action.matches;
            let prevMatchList = state.matches;
            prevMatchList = [...prevMatchList, ...matches];
            AsyncStorage.multiSet([
                ['matches', JSON.stringify(prevMatchList)]
            ]);
            return {...state, matches: prevMatchList};

        default:
            return state;
    }
};

export default matchesReducer;