// import { auth, database, provider } from "../../config/firebase";
import * as at from './actionTypes';
import axios from 'axios';
import * as mockData from "./mockData";

export function getContests(options) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.get(`url`)
            .then(res => {
                const { contests } = res;
                dispatch({type: at.GET_CONTESTS, contests});
            }).catch(err => {
                // console.log("in errorrrrrr");
                const contests = mockData.CONTESTS_LIST;
                dispatch({type: at.GET_CONTESTS, contests});
            });
        });
    }
}

export function setSelectedContest(contest) {
    return (dispatch) => {
        // console.log("In tasks");
        dispatch({
            type: at.SET_SELECTED_CONTEST,
            contest
        });
    }
}

export function goBackToContests() {
    return (dispatch) => {
        // console.log("In tasks");
        dispatch({
            type: at.GO_BACK_TO_TASKS
        });
    }   
}

