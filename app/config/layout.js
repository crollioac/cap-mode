import React from "react";
import { View , StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Header from "../modules/global/components/Header";
import Footer from "../modules/global/components/FooterMenu";
import Routes from "./routes";
import Matches from '../modules/matches/scenes';
// import Tasks from '../modules/tasks/scenes';
import Contests from '../modules/contests/scenes';
import globalReducer from "../modules/global/reducer";


const Layout = () => {
    const globalSelector = useSelector(state => state.globalReducer);

    const { isHomeView, isContestsView } = globalSelector;

    // console.log("==========================================>", globalSelector);
    return (
        <View style={styles.layoutStyle} >
            <Header />
             { isHomeView ?  <Matches  /> : null }
             { isContestsView ?  <Contests  /> : null }
            <Footer />
        </View>
    )
};

const styles = StyleSheet.create({
    layoutStyle: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
});

export default Layout;
