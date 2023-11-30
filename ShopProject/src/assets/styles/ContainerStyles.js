import { StyleSheet } from "react-native";
import AppColors from "../colors/AppColors";
import { Neomorph } from "react-native-neomorph-shadows-fixes";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const ContainerStyles = StyleSheet.create({
    flex: {
        flex: 1
    },
    fullsecren: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: '#DDDDDD'
    },
    fullScreenCenteredContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor:AppColors.background,
        justifyContent: 'center',
        // alignSelf: 'center',
    },
    centeredContainer: {
        alignItems: "center",
        backgroundColor: AppColors.backgroundSeller,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    rowContainer: {
        flexDirection: "row",
        // paddingHorizontal:wp('4'),
    },
    imageBox: {
        width: wp('30%'),
        height: wp('30%'),
        borderRadius: 50,
        alignSelf: "center",
        paddingTop: 10
    },
    ProfileImageBox: {
        width: wp('50%'),
        height: wp('50%'),
        borderRadius: 50,
        alignSelf: "center",
        paddingTop: 10
    },
    profileIcon: {
        color: AppColors.primary,

    },
    pTextIcon: {
        fontSize: 25,
        padding: 10,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        width: wp('100%'),
        height: hp("5%")
    },

    neomorphTextInput: {
        width: wp('92%'),
        height: wp('15%'),
        shadowRadius: 4,
        borderRadius: 15,
        backgroundColor: AppColors.background,
        marginVertical: 5,
    },
    imageBkView: {
        width: wp('110%'),
        height: hp('10%'),
        backgroundColor: 'black',
        opacity: 0.75,
        justifyContent: 'center',

    },
    neomorphButton: {
        width: wp('65%'),
        height: wp('15%'),
        shadowRadius: 4,
        borderRadius: 35,
        backgroundColor: AppColors.primary,
        marginVertical: 10,
        borderColor: "#9400F7",
        alignItems: "center"
    },
    squareApiContainer: {
        width: 400,
        height: 200,
        borderRadius: wp('5%'),
        shadowRadius: wp('3%'),
        marginHorizontal: wp('2%'),
        marginVertical: wp('2%'),


    },
    squareBoxContainer: {
        width: wp('49%'),
        height: wp('4%'),
        borderRadius: wp('5%'),
        shadowRadius: wp('3%'),
        marginHorizontal: wp('2%'),
        marginVertical: wp('2%'),


    }, squareBoxproductContainer: {
        width: wp('92%'),
        height: wp('30%'),
        borderRadius: wp('5%'),
        shadowRadius: wp('3%'),
        backgroundColor: '#DDDDDD',
        alignSelf: 'center',
        padding: 10,
        marginTop: wp('3%'),
        flexDirection: 'row'


    },
    squareBoxHalfScreenContainer: {
        width: wp('90%'),
        height: hp('30%'),
        shadowRadius: 1,
        backgroundColor: AppColors.background,
        marginHorizontal: wp('5%'),
        marginVertical: wp('2%'),
        borderRadius: wp('5%')
    },
    squareBoxHalfScreenContainer1: {
        shadowRadius: 10,
        borderRadius: 25,
        backgroundColor: '#DDDDDD',
        width: wp('90%'),
        height: hp('30%'),
        marginTop: wp('8%'),
        // marginLeft: 35,
    },
    squareBoxHalfScreenContainer2: {
        shadowRadius: 10,
        // borderRadius: 25,
        backgroundColor: '#DDDDDD',
        width: wp('100%'),
        height: hp('40%'),
        padding: 5
        // marginTop: wp('8'),
        // marginLeft: 35,
    },

    squareBoxCatScreenContainer: {
        width: wp('42%'),
        height: hp('42%'),
        shadowRadius: 2,
        // backgroundColor: AppColors.background,
        backgroundColor: "steelblue",
        marginHorizontal: wp('2%'),
        marginVertical: wp('2%'),
        borderRadius: wp('5%')
    },

    squareBoxFullScreenContainer: {
        width: wp('95%'),
        height: wp('50%'),
        shadowRadius: 4,
        backgroundColor: AppColors.background,
        marginHorizontal: wp('2%'),
        marginVertical: wp('2%'),
        borderRadius: wp('5%')
    },
    avatarOuterContainer: {
        width: wp('35%'),
        height: wp('35%'),
        backgroundColor: AppColors.background,
        margin: 20,
        shadowRadius: 4,
        borderRadius: wp('35%'),
        justifyContent: "center",
        alignItems: 'center',
    },
    avatarSubInnerContainer: {
        width: wp('28%'),
        height: wp('28%'),
        backgroundColor: AppColors.background,
        margin: 20,
        shadowRadius: 4,
        borderRadius: wp('28%'),
        justifyContent: "center",
        alignItems: 'center',
    },
    avatarInnerContainer: {
        width: wp('32%'),
        height: wp('32%'),
        backgroundColor: AppColors.background,
        margin: 20,
        shadowRadius: 1,
        borderRadius: wp('32%'),
        justifyContent: "center",
        alignItems: 'center',
    },
    headerStyle: {
        fontSize: 'bold',
        width: wp('100%'),
        height: hp('8%'),
        color: AppColors.background
    },
    neomorphContainer: {
        shadowRadius: 3,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: wp('95%'),
        height: hp('9%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    neomorphSubcategoryCard: {
        shadowRadius: 3,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: wp('95%'),
        height: hp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    slideSwiper: {
        //  marginTop:10,
        flex: 1,
        height: hp('45%'),
        width: wp('100%'),
        borderRadius: 25
    }
})
export default ContainerStyles;