import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import * as actions from '../../actions';
import { useDispatch } from 'react-redux';
const { changeTask } = actions;

const TaskTile = ({ task }) => {

    const dispatch = useDispatch();
    const gotoThisTask = () => {
        dispatch(changeTask(task));
    };

    console.log("Task =====> ", task);

    const {
        taskTile,
        taskName
    } = styles;

    return (
        <View style={taskTile}>
            <TouchableOpacity
                onPress={gotoThisTask}
            >
                {/* <FontAwesomeIcon
                    style={backIcon}
                    name="arrow-left"
                /> */}
                <Text style={taskName}>{task.name}</Text>

            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    taskTile: {
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        width: 80,
        padding: 10,
        borderWidth: 1,
        borderColor: "#000"
    },
    taskName: {
        fontSize: 16
    }
});


export default TaskTile;