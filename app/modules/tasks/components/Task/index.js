import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Task = ({ task }) => {

    console.log("Task =====> ", task);
    
    return (
        <View style={styles.task}>
            <Text>{task.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    task: {
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        width: 80,
        padding: 10,
        borderWidth: 1,
        borderColor: "#000",
        fontSize: 20
    }
});


export default Task;