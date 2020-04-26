import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Image, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Team from "../Team";
import { gotoContests } from '../../../global/actions';
import { setSelectedMatch } from '../../actions';
import * as utils from '../../utils';

const Match = ({ match }) => {
    const dispatch = useDispatch();
    const showTasks = (match) => {
        dispatch(gotoContests());
        dispatch(setSelectedMatch(match));
    }

    const { item } = match; // this is because of flatlist

    const {
        matchBlock,
        mLine1,
        mLine2,
        tournamentName,
        timeLeft
    } = styles;
    const timeObj = utils.getTimeLeft(item.startTime);

    return (
        <View style={matchBlock}>
            <TouchableOpacity
                onPress={() => showTasks(item)}
            >
                <View style={mLine1}>
                    <Text style={tournamentName}>{item.tournamentName}</Text>
                </View>

                <View style={mLine2}>
                    <Team
                        team={item.team1}></Team>
                    <Text style={timeLeft}> {timeObj.timeString} </Text>
                    <Team
                        team={item.team2}></Team>
                </View>

            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    matchBlock: {
        width: "100%",
        padding: 10,
        backgroundColor: "#ffffff",
        marginBottom: 10
    },
    timeLeft: {
        width: "30%",
        color: "#f00",
        textAlign: "center"
    },
    mLine1: {
        padding: 5,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2"
    },
    mLine2: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10
    },
    tournamentName: {
        fontSize: 12,
        color: "#828282"
    }
});


export default Match;