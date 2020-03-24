import { AsyncStorage } from 'react-native';

import * as at from './actionTypes';
import * as mockData from "./mockData";
import { actions } from '../home';
import * as utils from "./utils/utils";

let initialState = { footerMenuList: [] };

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.GET_FOOTER_MENU:
            let { footerMenuList } = action;
            // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['footerMenuList', JSON.stringify(footerMenuList)]
            ]);

            return {...state, footerMenuList };

        case at.GOTO_MENU_ITEM:
            let { menuItem } = action;
            footerMenuList = state.footerMenuList;
            footerMenuList = utils.resetFooterIcons(footerMenuList, menuItem);
            return {...state, footerMenuList };

        default:
            return state;
    }
};

export default globalReducer;