import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Image, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Team from "../Team";
import { gotoTasks } from '../../../global/actions';
const Match = ({ match }) => {

    const dispatch = useDispatch();
    const showTasks = (match) => {
        dispatch(gotoTasks(match));
    }

    const { item } = match; // this is because of flatlist

    return (
        <View>
            <TouchableOpacity
                style={styles.match}
                onPress={() => showTasks(item)}>
                <Team
                    style={styles.team1}
                    team={item.team1}></Team>
                <Text style={styles.vs}> VS </Text>
                <Team
                    style={styles.team1}
                    team={item.team2}></Team>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    match: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"

    },
    team1: {
        width: "45%"
    },
    vs: {
        width: "10%"
    },
    team2: {
        width: "45%"
    }
});


export default Match;