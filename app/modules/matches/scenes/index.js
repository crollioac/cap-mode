import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { View, StyleSheet, Alert, FlatList } from "react-native";

import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import styles from "./styles";

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
}

export default Matches;