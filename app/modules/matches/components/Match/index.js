import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Team from "../Team";
const Match = ({ match }) => {

    console.log("#################", match);
    const { item } = match; // this is because of flatlist

    return (
        <View style={styles.match}>
            <Team team={item.team1}></Team>
            <Text> VS </Text>
            <Team team={item.team2}></Team>
        </View>
    )
};

const styles = StyleSheet.create({
    match: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000"
    }
});


export default Match;