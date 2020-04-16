import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskHeader = ({task}) => {
    return (
        <View style={styles.header}>
            <Text>{task.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        textAlign: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        fontSize: 30
    }
});

export default TaskHeader;