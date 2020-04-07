import React from 'react';
import { View, Image, Text } from 'react-native';

function Team({team}) {
    return (
        <View>
            <Image source={team.team_image_url}></Image>
            <Text>{team.name}</Text>
        </View>
    )
}

export default Team;