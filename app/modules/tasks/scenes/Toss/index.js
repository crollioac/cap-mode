import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import TaskHeader from '../../components/TaskHeader';
import TossSelection from '../../components/TossSelection';

const Toss = ({ task }) => {
    const { team1, team2 } = task;
    console.log(task);
    return (
        <View>
            {/* <TouchableOpacity
                style={backButton}
                onPress={() => goBackToTasks()}
            >
                <FontAwesomeIcon
                    style={backIcon}
                    name="arrow-left"
                />
            </TouchableOpacity> */}
            <TaskHeader task={task} />
            <View >
                <TossSelection team={team1} />
                <TossSelection team={team2} />
                
            </View>
        </View>
    )
};

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

export default Toss;