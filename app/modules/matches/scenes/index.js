import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { View, StyleSheet, Alert, FlatList } from "react-native";

import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { theme } from "../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

import * as actions from "../actions";

import Match from "../components/Match";
const { getMatches } = actions;

// const { color } = theme;

const Matches = () => {
    const matchesReducer = useSelector(state => state.matchesReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMatches());
    }, []);

    const { matches } = matchesReducer;

    return (
        <FlatList
        data={matches}
        renderItem={(match) => <Match key={match.matchId} match={match} />}
        keyExtractor={match => match.matchId}
        style={styles.container}>
            {/* {matches.map(match =>  />)} */}
        </FlatList>
    );
};


const resizeMode = 'contain';

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        position: "relative"
    },
  
    bottomContainer:{
        backgroundColor:"white",
        paddingVertical: padding * 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    buttonContainer:{
        justifyContent:"center",
        alignItems:"center"
    }
});

export default Matches;