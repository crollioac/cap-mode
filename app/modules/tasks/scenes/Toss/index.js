import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TaskHeader from '../../components/TaskHeader';
// import TaskeHeader from '../../components/TaskHeader';

const Toss = ({ task }) => {

    const { team1, team2 } = task;
    console.log(task);
    const { tossTask,
        taskBlock, taskButton } = styles;
    return (
        <View>
            
            <TaskHeader task={task} />
            <View style={tossTask}>
                <View style={taskBlock}>
                    <Text>
                        {team1.captain} will choose
                    </Text>
                    <TouchableOpacity
                        style={taskButton}
                        // onPress={() => goBackToMatches()}
                    >
                        <Text>Batting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={taskButton}
                        // onPress={() => goBackToMatches()}
                    >
                        <Text>Bowling</Text>
                    </TouchableOpacity>
                </View>
                <View style={taskBlock}>
                    <Text>
                        {team2.captain} will choose
                    </Text>
                    <TouchableOpacity
                        style={taskButton}
                        // onPress={() => goBackToMatches()}
                    >
                        <Text>Batting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={taskButton}
                        // onPress={() => goBackToMatches()}
                    >
                        <Text>Bowling</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    tossTask: {

    },
    taskBlock:{
        padding: 20,
        borderBottomWidth: 1,
        borderColor: "#ccc"
    },
    taskButton: {
        borderWidth: 1,
        borderColor: "#444",
        margin: 10
    }
});

export default Toss;