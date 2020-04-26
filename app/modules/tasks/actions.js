// import { auth, database, provider } from "../../config/firebase";
import * as at from './actionTypes';
import axios from 'axios';
import * as mockData from "./mockData";

export function getTasks(options) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.get(`tasksurl`)
            .then(res => {
                const { tasks } = res;
                dispatch({type: at.GET_TASKS, tasks});
            }).catch(err => {
               
                const tasks = mockData.TASKS_LIST;
                // console.log("tasks in errorrrrrr", tasks);
                dispatch({type: at.GET_TASKS, tasks});
            });
        });
    }
}

export function changeTask(newTask) {
    return (dispatch) => {               
        dispatch({type: at.NEW_TASK, task: newTask});    
    }
}

export function updatePlayerSelection(player) {
    
}

