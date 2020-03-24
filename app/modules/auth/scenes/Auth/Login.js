import React, { useState } from 'react';

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import {actions as auth} from "../../index"

import Form from "../../components/Form"

const {login} = auth;

const fields = [
    {
        key: 'email',
        label: "Email Address",
        placeholder: "Email Address",
        autoFocus: false,
        secureTextEntry: false,
        value: "test3@mesandigital.com",
        type: "email"
    },
    {
        key: 'password',
        label: "Password",
        placeholder: "Password",
        autoFocus: false,
        secureTextEntry: true,
        value: "testpass",
        type: "password"
    }
];

const errorState = {
    general: "",
    email: "",
    password: ""
}

const Login  = () => {
    cont [error, setError] = useState(errorState);

    onForgotPassword = () => {
        Actions.ForgotPassword();
    }

    onSubmit = (data) => {
        setError(errorState); //clear out error messages

        login(data)
            .then(({exists, user}) => {
                if (!exists) Actions.CompleteProfile({user})
            })
            .catch(onError);
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
                showLabel={false}
                onSubmit={this.onSubmit}
                buttonTitle={"LOG IN"}
                error={this.state.error}
                onForgotPassword={this.onForgotPassword}/>
    );
}

export default connect(null, {login})(Login);