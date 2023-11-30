import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import AppColors from "../colors/AppColors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const TextFieldStyles = StyleSheet.create({
    inputField: {
        shadowRadius: 1,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        width: wp('90%'),
        height: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        padding: 10,
        margin: 10,
        shadowColor: "red"
    },
    searchbarfield: {
        shadowRadius: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: wp('90%'),
        height: hp("7%"),
        marginTop: 10,
        flexDirection: 'row',
        margin: 5,
        marginBottom: 10,
        marginTop: 10,
    },
    forgetPasswordNeomorph: {
        shadowRadius: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: wp('90%'),
        height: hp("8%"),
        marginTop: 10,
        shadowColor: '#f0f0f',
        margin: 10
    },
    forgetPasswordtextInput: {
        marginLeft: 10
    },
    addProductInputField: {
        shadowRadius: 10,
        borderRadius: 25,
        backgroundColor: '#DDDDD',
        width: 260,
        height: 70,
        marginTop: 20,
    }
});

export default TextFieldStyles;