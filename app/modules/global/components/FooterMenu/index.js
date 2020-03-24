import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon  from "react-native-vector-icons";
// import Icon from 'react-native-vector-icons/FontAwesome';
import FooterIcon from "../FooterIcon";
import * as actions from "../../actions";
const { getFooterMenu } = actions;

const FooterMenu = () => {
    const globalReducer = useSelector(state => state.globalReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFooterMenu());
    }, []);

    const { footerMenuList } = globalReducer;

    console.log(footerMenuList);
    return (
        <View style={styles.footerMenu}>
            <View style={styles.buttonContainer}>
                {
                    footerMenuList.map(footerMenuItem => <FooterIcon key={footerMenuItem.menuItem} icon={footerMenuItem} />)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerMenu: {
        position: "relative",
        bottom: 0,
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: "#000"
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

export default FooterMenu;