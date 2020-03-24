import React, { Component, useState } from 'react';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { actions as auth } from "../../index"

const { resetPassword } = auth;

import Form from "../../components/Form"

const fields = [
    {
        key: 'email',
        label: "Email Address",
        placeholder: "Email",
        autoFocus: false,
        secureTextEntry: false,
        value: "test3@mesandigital.com",
        type: "email"
    }
];

const errorState = {
    general: "",
    email: ""
}

const ForgotPassword = (props) => {

    const [error, setError] = useState(errorState);

    onSubmit = (data) => {
        setError(error); //clear out error messages

        props.resetPassword(data)
            .then(() => {
                alert("Password Reminder Sent")
                Actions.pop()
            }).catch(onError);
    }

    onError = () => {
        let errObj = error;

        if (error.hasOwnProperty("message")) {
            errObj['general'] = error.message;
        } else {
            let keys = Object.keys(error);
            keys.map((key, index) => {
                errObj[key] = error[key];
            })
        }

        setError(errObj);
    }

    return (
        <Form fields={fields}
            onSubmit={onSubmit}
            buttonTitle={"SUBMIT"}
            error={error} />
    );
}

export default connect(null, { resetPassword })(ForgotPassword);