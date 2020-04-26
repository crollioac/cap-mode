import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
// import { images } from "../../../../assets/images";
function Team({team}) {

    let flagUrl = team.flagUrl;
    const {
        teamStyle,
        teamName
    } = styles;
    // console.log(flagUrl);
    return (
        <View style={teamStyle}>
            {/* <Image source={flagUrl}></Image> */}
            <Text style={teamName}>{team.shortName.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    teamStyle: {
        width: "35%"
    },
    teamName: {
        textAlign: "center"
    }
})

export default Team;