import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { gotoTasks } from '../../../global/actions';
import { useDispatch } from 'react-redux';

// import { images } from "../../../../assets/images";
function ContestBlock({ contest }) {
    const dispatch = useDispatch();

    const showTasks = (contest) => {
        dispatch(gotoTasks());
    }

    const {
        contestBody,
        cRow,
        cL1Label,
        cPrizePoolValue,
        cCashButton,
        cSeparator,
        cLeftSpots,
        cTotalSpots,
        cFirstPrize,
        cLine3,
        iconStyle,
        c1stPLabel,
        cCashValue
    } = styles;
    
    const cFillLength = {
        width: `${(contest.filledSpots / contest.totalSpots) * 100}%`,
        height: 8,
        backgroundColor: "#FF9800"
    };
    return (
        <View style={contestBody}>
            <View style={cRow}>
                <View>
                    <Text style={cL1Label}>Prize Pool</Text>
                    <Text style={cPrizePoolValue}>{contest.prizePoolAmoutInWords}</Text>
                </View>
                <View>
                    <Text style={cL1Label}>Entry</Text>
                    <TouchableOpacity
                        style={cCashButton}
                        onPress={showTasks}
                    >
                        <Text style={cCashValue}>{contest.currency} {contest.entryFee}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={cSeparator}>
                <View style={cFillLength}></View>
            </View>
            <View style={cRow}>
                <View >
                    <Text style={cLeftSpots}>{`${contest.leftSpots} spots left`}</Text>
                </View>
                <View >
                    <Text style={cTotalSpots}>{`${contest.totalSpots} total spots`}</Text>
                </View>
            </View>
            <View style={cLine3}>
                <View style={cFirstPrize}>
                    <FontAwesomeIcon
                        style={iconStyle}
                        name="money"
                    />
                    <Text style={c1stPLabel}>{contest.prizeList[0].amountInWords}</Text>
                </View>
                {/* <View></View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contestBody: {
        width: "100%",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#ffffff",
    },
    cRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    cL1Label: {
        color: "#aaa",
        fontSize: 12,
        marginBottom: 5
    },
    cPrizePoolValue: {
        color: "#333333",
        fontSize: 22
    },
    cCashButton: {
        backgroundColor: "#364fda",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 3,
    },
    cCashValue: {
        color: "#fff"
    },
    cSeparator: {
        backgroundColor: "#cccccc",
        height: 8,
        marginBottom: 5
    },
    cLeftSpots: {
        fontSize: 16,
        color: "#FF9800"
    },
    cTotalSpots: {
        fontSize: 16,
        color: "#999"
    },
    cLine3: {
        paddingVertical: 5,
        backgroundColor: "#f2f2f2",
        flexDirection: "row"
    },
    iconStyle: {
        fontSize: 16,
        color: "#999",
        marginRight: 5
    },
    cFirstPrize: {
        flexDirection: "row",
        alignItems: "center"
    },
    c1stPLabel: {
        fontSize: 12,
        color: "#999"
    }
});


export default ContestBlock;