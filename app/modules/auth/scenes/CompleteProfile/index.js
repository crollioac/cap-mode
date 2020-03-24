
import React, { useState } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { actions as auth } from "../../index"
const { createUser } = auth;

import Form from "../../components/Form"

const fields = [
    {
        key: 'username',
        label: "Username",
        placeholder: "Username",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "text"
    }
];

const errorState = {
    general: "",
    username: ""
}

const CompleteProfile = (props) => {
    cont[error, setError] = useState(errorState);

    onSubmit = (data) => {
        setError(errorState); //clear out error messages

        //attach user id
        const { user } = props;
        data['uid'] = user.uid;

        props.createUser(data, onSuccess, onError);
    }

    onSuccess = () => {
        Actions.Main();
    }

    onError = (error) => {
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
            onSubmit={onSubmit}
            buttonTitle={"CONTINUE"}
            error={error} />
    );

}

export default connect(null, { createUser })(CompleteProfile);