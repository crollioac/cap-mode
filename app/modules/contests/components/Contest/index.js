import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Image, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Team from "../ContestBlock";
import { setSelectedContest } from '../../actions';
import ContestBlock from '../ContestBlock';
const Contest = ({ contest }) => {

    const dispatch = useDispatch();
    

    const { item } = contest; // this is because of flatlist

    const {
        cName,
        cDesc,
        cBlock,
        cHeadings
    } = styles;
    return (
        <View style={cBlock}>
            <View style={cHeadings}>
            <View><Text style={cName}> {item.name}</Text></View>
            <View><Text style={cDesc}>{item.description}</Text></View>
            </View>
            <TouchableOpacity
                style={styles.contest}
            >

                {/* <View> */}
                    <ContestBlock contest={item} />
                {/* </View> */}
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    contest: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"

    },
    cBlock: {
        padding: 10,
    },
    cHeadings: {
        marginBottom: 10
    },
    cName: {
        fontSize: 26,
        marginBottom: 5,
        whiteSpace: "initial"
    },
    cDesc: {
        fontSize: 14,
        color: "#aaaaaa"
    }
});


export default Contest;