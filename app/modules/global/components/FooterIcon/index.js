import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity, StyleSheet } from "react-native";
import FontAwesomeIcon  from "react-native-vector-icons/FontAwesome";
import * as actions from "../../actions";
const { gotoMenu } = actions;

const FooterIcon = ({icon}) => {
    const dispatch = useDispatch();
    const gotoMenuItem = (item) => {
        dispatch(gotoMenu(item));
        
    };
    const iconStyle = icon.status ? styles.iconStyle :  styles.disbaled;
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => gotoMenuItem(icon)}
        >
            <FontAwesomeIcon 
                style={iconStyle}
                name={icon.iconName}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10
    },
    iconStyle: {
        fontSize: 24
    },
    disbaled: {
        fontSize: 24,
        color: "#aaa"
    }
});

export default FooterIcon;