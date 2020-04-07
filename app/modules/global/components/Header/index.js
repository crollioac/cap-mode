import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as auth from "../../../auth/actions";
import { set } from 'react-native-reanimated';

const Header = () => {
    const authSelector = useSelector(state => state.authReducer);
    console.log("@@@@@@@@@@@@@", authSelector);
    const  { isLoggedIn, user } = authSelector;

    const dispatch = useDispatch();
    const loginUser = () => {
        dispatch(auth.loginUser());
    };

    console.log(isLoggedIn, "isLoggedIn");
    return (
        <View style={styles.headerMenu}>
            {
                isLoggedIn ? <Text>{user.displayName}</Text> : <Text onPress={() => loginUser()}>Login</Text>
            }
        </View>
    )
};
const styles = StyleSheet.create({
    headerMenu: {
        marginTop: 30,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#000"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        padding: 10
    },
    iconStyle: {
        fontSize: 24
    }
});

export default Header;