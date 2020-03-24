import React from 'react';

var { View, StyleSheet, Alert } = require('react-native');

import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import styles from "./styles"

import { actions as auth, theme } from "../../../auth/index"
import Matches from "../../../matches/scenes";

const { signOut } = auth;

// const { color } = theme;

const Home = (props) => {
    onSignOut = () => {
        props.signOut()
            .then(() => Actions.reset("Auth"))
            .catch((error) => {
                Alert.alert('Oops!', error.message);
            })
    }

    return (
        <View style={styles.container}>
            <Header isLoggedIn={isLoggedIn} />
            <MainBody >
                <Matches />
            </MainBody>
            <FooterMenu menuList={menuList} />
        </View>
    );
}

export default connect(null, { signOut })(Home);