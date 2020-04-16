import { AsyncStorage } from 'react-native';

import * as at from './actionTypes';
import * as mockData from "./mockData";
import { actions } from '../home';
import * as utils from "./utils/utils";

let initialState = { footerMenuList: [], isHomeView: true, isTasksView: false };

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.GET_FOOTER_MENU:
            let { footerMenuList } = action;
            // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['footerMenuList', JSON.stringify(footerMenuList)]
            ]);

            return { ...state, footerMenuList };

        case at.GOTO_MENU_ITEM:
            let { menuItem } = action;
            footerMenuList = state.footerMenuList;
            footerMenuList = utils.resetFooterIcons(footerMenuList, menuItem);
            return { ...state, footerMenuList };

        case at.GOTO_TASKS:
            // console.log("tasks ------------------------------------");
            let { data: { match } } = action;
            return { ...state, match, isHomeView: false, isTasksView: true };
        case at.GOTO_MATCHES:
            // console.log("goto matches ------------------------------------");
            return { ...state, isHomeView: true, isTasksView: false };

        default:
            return state;
    }
};

export default globalReducer;