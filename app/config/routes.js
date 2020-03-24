import React, {Component, useState, useEffect} from 'react';
import { Scene, Router, ActionConst, Stack, Modal, Tabs } from 'react-native-router-flux';

//Splash Component
import Splash from '../components/Splash';

//Authentication Scenes
import Welcome from '../modules/auth/scenes/Auth/Welcome';
import Register from '../modules/auth/scenes/Auth/Register';
import CompleteProfile from '../modules/auth/scenes/CompleteProfile';
import Login from '../modules/auth/scenes/Auth/Login';
import ForgotPassword from '../modules/auth/scenes/Auth/ForgotPassword';
import Home from '../modules/home/scenes/Home';
import Matches from '../modules/matches/scenes';
import Header from "../modules/global/components/Header";
import FooterMenu from "../modules/global/components/FooterMenu";

//Import Store, actions
import store from '../redux/store'
import { checkLoginStatus } from "../modules/auth/actions";

import { color, navTitleStyle } from "../styles/theme";

const Routes = () => {
    const [isReady, setIsReady] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [exist, setExist] = useState(false);

    if (!isReady)
        return <Splash/>

    return (
        <Router>
            <Scene key="root" hideNavBar
                    navigationBarStyle={{backgroundColor: "#fff"}}
                    titleStyle={navTitleStyle}
                    backButtonTintColor={color.black}>
                {/* <Stack key="Auth" initial={!isLoggedIn}>
                    <Scene key="Welcome" component={Welcome} title="" initial={true} hideNavBar/>
                    <Scene key="Register" component={Register} title="Register" back/>
                    <Scene key="CompleteProfile" component={CompleteProfile} title="Select Username" back={false}/>
                    <Scene key="Login" component={Login} title="Login"/>
                    <Scene key="ForgotPassword" component={ForgotPassword} title="Forgot Password"/>
                </Stack> */}

                <Stack key="Matches">
                    <Scene key="Matches" component={Matches} title="Matches" initial={true} type={ActionConst.REPLACE}/>
                </Stack>

                {/* <Stack key="Main" initial={isLoggedIn}>
                    <Scene key="Home" component={Home} title="Home" initial={true} type={ActionConst.REPLACE}/>
                </Stack> 
                <FooterMenu />
                */}
            </Scene>
        </Router>
    )
};

export default Routes;