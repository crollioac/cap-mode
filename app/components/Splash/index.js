import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

import styles from './styles'

const Splash = () => {

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.image} source={{ uri: "" }} />
                <Text style={styles.title}>Quotes</Text>
            </View>
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true} />
            </View>
        </View>
    );

}

export default Splash;