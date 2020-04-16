// import { auth, database, provider } from "../../config/firebase";
import * as at from './actionTypes';
import axios from 'axios';
import * as mockData from "./mockData";

export function getMatches(options) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.get(`url`)
            .then(res => {
                const { matches } = res;
                dispatch({type: at.GET_MATCHES, matches});
            }).catch(err => {
                // console.log("in errorrrrrr");
                const matches = mockData.MATCHES_LIST;
                dispatch({type: at.GET_MATCHES, matches});
            });
        });
    }
}

