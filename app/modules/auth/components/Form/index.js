import React, { useState } from 'react';

import { Text, View } from 'react-native';
import { Button } from 'react-native-elements'

import { isEmpty, validate } from '../../utils/validate'

import styles from "./styles"

import AuthTextInput from "../AuthTextInput"

const Form = (props) => {
    
    const { fields, showLabel, buttonTitle, onForgotPassword, error } = props;
    
    
    const [newState, setNewState] = useState(state);

    createState = (fields, error) => {
        //create the state
        const state = {};
        fields.forEach((field) => {
            let { key, type, value } = field;
            state[key] = { type: type, value: value };
        })

        state["error"] = error;
        return state;
    }

    const state = createState(fields, error);
    onSubmit = () => {
        const data = newState;
        const result = validate(data);

        if (!result.success) setNewState({ ...newState, error: result.error });
        else props.onSubmit(extractData(data));
    }

    extractData = (data) => {
        const retData = {};

        Object.keys(data).forEach(function (key) {
            if (key !== "error") {
                let { value } = data[key];
                retData[key] = value;
            }
        });

        return retData;
    }

    onChange = (key, text) => {
        const state = newstate;
        state[key]['value'] = text;
        setNewState({...newState, state});
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                {
                    (!isEmpty(state.error['general'])) &&
                    <Text style={styles.errorText}>{state.error['general']}</Text>
                }

                {
                    fields.map((data, idx) => {
                        let { key, label, placeholder, autoFocus, secureTextEntry, keyboardType } = data;
                        // console.log(data);
                        console.log(state[key]);
                        return (
                            <AuthTextInput key={key}
                                label={label}
                                showLabel={showLabel}
                                placeholder={placeholder}
                                autoFocus={autoFocus}
                                onChangeText={(text) => onChange(key, text)}
                                secureTextEntry={secureTextEntry}
                                keyboardType={keyboardType}
                                value={state[key]['value']}
                                error={state.error[key]} />
                        )
                    })
                }

                <Button
                    raised
                    title={buttonTitle}
                    borderRadius={0}
                    containerViewStyle={styles.containerView}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                    onPress={this.onSubmit} />
                {
                    props.onForgotPassword !== null &&
                    <Text style={styles.forgotText} onPress={onForgotPassword}>
                        Forgot password?</Text>
                }

            </View>
        </View>
    );

}

export default Form;