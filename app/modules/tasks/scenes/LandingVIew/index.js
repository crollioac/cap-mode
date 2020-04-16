import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { View, StyleSheet, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { theme } from "../../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

import * as actions from "../../actions";
import * as glActions from "../../../global/actions";

import TaskTlie from "../../components/TaskTile";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ceil } from 'react-native-reanimated';
const { getTasks, changeTask } = actions;
const { gotoMatches } = glActions;

const LandingView = () => {
    const tasksReducer = useSelector(state => state.tasksReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTasks());
    }, []);

    const goBackToMatches = () => {
        dispatch(gotoMatches());
    }

    const { tasks } = tasksReducer;
    if (!tasks.preMatchStart) {
        return <Text> No Tasks right now </Text>;
    }
    const { tasks: { preMatchStart, postMatchStart } } = tasksReducer;
    const {
        container,
        tasksHeader,
        taskContainer,
        backButton,
        backIcon,
        tasksBody
    } = styles;
    // console.log("TASKSSSSSSSSSSSSSSSSSSSSSSSSS =====>", tasksReducer);
    return (
        <View style={container}>
            <View style={tasksHeader}>
                <TouchableOpacity
                    style={backButton}
                    onPress={() => goBackToMatches()}
                >
                    <FontAwesomeIcon
                        style={backIcon}
                        name="arrow-left"
                    />
                </TouchableOpacity>
                <Text>Captain Mode</Text>
            </View>
            <View style={tasksBody}>
                <Text>Pre Match Decisions</Text>
                <View style={taskContainer}>
                    {preMatchStart.map(task => <TaskTlie key={task.id} task={task}></TaskTlie>)}
                </View>
                <Text>Post Match Decisions</Text>
                <View style={taskContainer}>
                    {postMatchStart.map(task => <TaskTlie key={task.id} task={task}></TaskTlie>)}
                </View>
            </View>
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

export default LandingView;