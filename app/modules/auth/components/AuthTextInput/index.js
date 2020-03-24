import React, {Component} from 'react';
import PropTypes from 'prop-types'

import { View } from 'react-native';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { isEmpty } from '../../utils/validate'
import styles from "./styles"

const AuthTextInput = (props) => {
        const { showLabel, placeholder, autoFocus, onChangeText, secureTextEntry, placeholderTextColor, keyboardType } = props;

        console.log(props);
        return (
            <View style={styles.container}>
                {
                    (showLabel) &&
                    <FormLabel>{props.label}</FormLabel>
                }
                {/* <FormInput
                    type={props.type || "text"}
                    autoCapitalize='none'
                    clearButtonMode='while-editing'
                    underlineColorAndroid={"#fff"}
                    placeholder={placeholder || "" }
                    autoFocus={autoFocus || ""}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry || ""}
                    containerStyle={styles.containerStyle || ""}
                    inputStyle={styles.inputContainer|| ""}
                    placeholderTextColor={placeholderTextColor || ""}
                    keyboardType={keyboardType || "" }
                    value={props.value }/> */}
                {
                    (!isEmpty(props.error)) &&
                    <FormValidationMessage>
                        {props.error}
                    </FormValidationMessage>
                }
            </View>
        );
};

export default AuthTextInput;