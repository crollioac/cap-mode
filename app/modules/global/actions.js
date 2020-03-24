// import { auth, database, provider } from "../../config/firebase";
import * as at from './actionTypes';
import axios from 'axios';
import * as mockData from "./mockData";

export function getFooterMenu(options) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.get(`url`)
            .then(res => {
                const { footerMenuList } = res;
                dispatch({type: at.GET_FOOTER_MENU, footerMenuList});
            }).catch(err => {
                console.log("in Footer Menu errorrrrrr");
                const footerMenuList = mockData.FOOTER_MENU;
                dispatch({type: at.GET_FOOTER_MENU, footerMenuList});
            });
        });
    }
}

export function gotoMenu(menuItem) {
    return (dispatch) => {
        // console.log(menuItem);
        dispatch({
            type: at.GOTO_MENU_ITEM,
            menuItem 
        })
    }
}

