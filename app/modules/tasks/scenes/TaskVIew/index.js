import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import * as TASKS from '../../constants';
import Play11 from '../Play11';
import Toss from '../Toss';
import OpeningBatsmen from '../OpeningBatsmen';
import OpeningBowler from '../OpeningBowler';
import NextBatsman from '../NextBastman';
import NextBowler from '../NextBowler';
import { gotoTasks } from '../../../global/actions';
import { changeTask } from '../../actions';
import { useDispatch } from 'react-redux';

const TaskView = ({ task }) => {
    const dispatch = useDispatch();
    const goBackToTasks = () => {
        dispatch(changeTask({key: TASKS.LANDING_VIEW}));
    }

    let displayComponent = null;

    const { backIcon, backButton } = styles;
    switch (task.key) {
        case TASKS.PLAY_11: displayComponent = <Play11 task={task} />;
            break;
        case TASKS.TOSS: displayComponent = <Toss task={task} />;
            break;
        case TASKS.OPENING_BATSMEN: displayComponent = <OpeningBatsmen task={task} />;
            break;
        case TASKS.OPENING_BOWLER: displayComponent = <OpeningBowler task={task} />;
            break;
        case TASKS.NEXT_BATSMAN: displayComponent = <NextBatsman task={task} />;
            break;
        case TASKS.NEXT_BOWLER: displayComponent = <NextBowler task={task} />;
            break;
        default:
            displayComponent = <View>
                <Text>No Task loaded</Text>
            </View>;
    }

    return (
        <View>
            <TouchableOpacity
                style={backButton}
                onPress={() => goBackToTasks()}
            >
                <FontAwesomeIcon
                    style={backIcon}
                    name="arrow-left"
                />
            </TouchableOpacity>
            {displayComponent}
        </View>
    )
};

const styles = StyleSheet.create({
    backButton: {
        marginRight: 50,
    },
    backIcon: {
        color: "#000000",
        fontSize: 24
    }
});

export default TaskView;