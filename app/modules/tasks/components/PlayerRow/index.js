import React from 'react';
import { View, Image, Text, CheckBox } from 'react-native';
import { set } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions';
const { updatePlayerSelection } = actions;

function PlayerRow({ player, rowNum }) {
    const dispatch = useDispatch();

    const selectPlayer = () => {
        dispatch(updatePlayerSelection(player));
    };

    return (
        <View>
            <Text>{ rowNum }</Text>  
            <Text>{player.name}</Text>
            <CheckBox checked={player.selected} onPress={selectPlayer} />
        </View>
    )
}

export default PlayerRow;