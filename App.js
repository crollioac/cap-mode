import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';


import Layout from './app/config/layout';
import store from './app/redux/store';

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

const App = () => {

    const [isReady, setIsReady] = useState(false);

    const loadAssetsAsync = async () => {
        const fontAssets = cacheFonts([
            { RobotoExtraBold: require('./app/assets/fonts/Roboto-Black.ttf') },
            { RobotoBold: require('./app/assets/fonts/Roboto-Bold.ttf') },
            { RobotoMedium: require('./app/assets/fonts/Roboto-Medium.ttf') },
            { RobotoRegular: require('./app/assets/fonts/Roboto-Regular.ttf') },
            { RobotoLight: require('./app/assets/fonts/Roboto-Light.ttf') }
        ]);

        await Promise.all([...fontAssets]);
        setIsReady(true);
    };

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadAssetsAsync}
                onFinish={() => setIsReady(true)}
                onError={console.warn}
            />
        );
    }

    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
};

export default App;