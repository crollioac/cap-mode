import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { View, StyleSheet, Text } from "react-native";

import { Button } from 'react-native-elements'

import * as TASKS from '../constants';
import LandingView from './LandingVIew';
import TaskView from './TaskVIew';

// const { color } = theme;

const Tasks = () => {
    const tasksReducer = useSelector(state => state.tasksReducer);
    const globalReducer = useSelector(state => state.globalReducer);
    const { match } = globalReducer;
    let displayComponent = <LandingView match={match} />;
    const { task } = tasksReducer;
    if (task.key !== TASKS.LANDING_VIEW) {
        displayComponent = <TaskView task={{ ...task, ...match }} />
    }

    return (
        <View style={styles.container}>
            {displayComponent}
        </View>
    );
};

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position: "relative",
        padding: 10

    },
    taskContainer: {
        width: "100%",
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around"
    },
    tasksHeader: {
        width: "100%",
        flexDirection: "row",
        position: "relative",

        // justifyContent: "center"
    },
    tasksBody: {
        // flexDirection: "row",
        alignItems: "center"
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    backButton: {
        marginRight: 50,
    },
    backIcon: {
        color: "#000000",
        fontSize: 24
    }
});

export default Tasks;