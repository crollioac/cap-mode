import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { View, StyleSheet, Text } from "react-native";

import { Button } from 'react-native-elements'

import LandingView from './LandingVIew';
// import Play11 from './Play11';
// import Toss from './Toss';
// import OpeningBatsmen from './OpeningBatsmen';
// import OpeningBowler from './OpeningBowler';
// import NextBatsman from './NextBastman';
// import NextBowler from './NextBowler';
// const { color } = theme;

const Tasks = () => {
    const tasksReducer = useSelector(state => state.tasksReducer);
    const dispatch = useDispatch();

    const comp = <LandingView />;
    return (
        <View style={styles.container}>
            {comp}
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