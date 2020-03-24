import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = ({ isLoggedIn }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(isLoggedIn);
    console.log(isLoggedIn, "isLoggedIn");
    return (
        <View style={styles.headerMenu}>
            {
                isLoggedIn ? <Text>ICON</Text> : <Text>Login</Text>
            }
        </View>
    )
};
const styles = StyleSheet.create({
    headerMenu: {
        width: "100%",
        borderTopWidth: 1,
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