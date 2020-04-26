import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const TossSelection = ({ team }) => {

    const dispatch = useDispatch();
    // const userReducer = useSelector(state => stateUserreducer);
    const chooseBatting = () => {
        // dispatch();
    }
    const chooseBowling = () => {
        // dispatch();
    }

    const { taskBlock, taskButton } = styles;
    return (
        <View style={taskBlock}>
            <Text>
                {team.captain} will choose
                    </Text>
            <TouchableOpacity
                style={taskButton}
                onPress={() => chooseBatting()}
            >
                <Text>Batting</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={taskButton}
                onPress={() => chooseBowling()}
            >
                <Text>Bowling</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    // tossTask: {

    // },
    taskBlock: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: "#ccc"
    },
    taskButton: {
        width: "30%",
        borderWidth: 1,
        borderColor: "#444",
        margin: 10
    }
});

export default TossSelection;