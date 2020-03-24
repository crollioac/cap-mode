import React, { useState } from 'react';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { actions as auth } from "../../index"
const { register } = auth;

import Form from "../../components/Form"

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
        key: 'username',
        label: "Username",
        placeholder: "Username",
        autoFocus: false,
        secureTextEntry: false,
        value: "mosesesan",
        type: "text"
    },
    {
        key: 'password',
        label: "Password",
        placeholder: "Password",
        autoFocus: false,
        secureTextEntry: true,
        value: "testpass",
        type: "password"
    },
    {
        key: 'confirm_password',
        label: "Confirm Password",
        placeholder: "Confirm Password",
        autoFocus: false,
        secureTextEntry: true,
        value: "testpass",
        type: "confirm_password"
    }
];

const errorState = {
    general: "",
    username: "",
    email: "",
    password: "",
    confirm_password: ""
}

const Register  = () => {
    const [error, setError] = useState(errorState);
    
    onSubmit = (data) => {
        setError(errorState);
        props.register(data)
            .then(() => Actions.Main())
            .catch(onError);
    }

    onError = (error) => {
        let errObj = this.state.error;

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
                onSubmit={onSubmit}
                buttonTitle={"SIGN UP"}
                error={error}/>
    );
}

export default connect(null, { register })(Register);