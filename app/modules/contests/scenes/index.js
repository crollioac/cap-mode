import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { View, StyleSheet, Alert, FlatList } from "react-native";

import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { theme } from "../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

import * as actions from "../actions";
import Tasks from "../../tasks/scenes";

import Contest from "../components/Contest";
const { getContests } = actions;

// const { color } = theme;

const Contests = () => {
    const contestsReducer = useSelector(state => state.contestsReducer);
    const tasksReducer = useSelector(state => state.tasksReducer);
    const dispatch = useDispatch();
    const { isTasksView } = tasksReducer;

    useEffect(() => {
        if (!isTasksView) {
            dispatch(getContests());
        }
    }, []);

    const { contests } = contestsReducer;

    return (

        isTasksView ? <Tasks /> : <FlatList
            data={contests}
            renderItem={(contest) => <Contest key={contest.contestId} contest={contest} />}
            keyExtractor={contest => contest.id}
            style={styles.container}>
            {/* {contests.map(contest =>  />)} */}
        </FlatList>


    );
};


const resizeMode = 'contain';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#f2f2f2",
        paddingBottom: 30
    },

    bottomContainer: {
        backgroundColor: "white",
        paddingVertical: padding * 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Contests;