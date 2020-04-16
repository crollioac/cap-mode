import React from 'react';
import { View, Image, Text } from 'react-native';
// import { images } from "../../../../assets/images";
function Team({team}) {

    let flagUrl = team.flagUrl;

    // console.log(flagUrl);
    return (
        <View>
            <Image source={flagUrl}></Image>
            <Text>{team.name}</Text>
        </View>
    )
}

export default Team;