import React from "react";
import { View } from "react-native";
import Header from "../modules/global/components/Header";
import Footer from "../modules/global/components/FooterMenu";
import Routes from "./routes";
import Matches from '../modules/matches/scenes';


const Layout = () => {
    return (
        <View >
            <Header />
            <Matches />
            <Footer />
        </View>
    )
}

export default Layout;
