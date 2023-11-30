import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import AppColors from "../colors/AppColors";

const LabelStyles = StyleSheet.create({
    introTitle: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: AppColors.primary,
        margin: 10,
        fontWeight: 'bold'
    },
    introSubTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: 'black'
    },
    headingDark: {
        fontWeight: "bold",
        fontSize: 45,
        color: AppColors.charcol,
        fontFamily: 'Poppins-Black'
    },
    headingMdDark: {
        // fontWeight:"bold",
        fontSize: 20,
        color: AppColors.charcol,
        fontFamily: 'Poppins-ExtraBold',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center'


    },
    headingSmDark: {
        // fontWeight:"bold",
        fontSize: 18,
        color: AppColors.charcol,
        fontFamily: 'Poppins-SemiBold'

    },
    headingLight: {
        fontSize: 48,
        color: AppColors.lightText
    },
    profileText: {
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        color: AppColors.lightText,
        marginIop: 10
    },
    lightText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: 'black',
        marginHorizontal: 10,
        // padding:5
    },
    seeAll: {
        //    fontWeight:"bold",
        fontSize: 16,
        color: AppColors.primary,
        fontFamily: 'Poppins-Regular'
    },
    horizontalLine: {
        width: wp('90%'),
        borderWidth: 0.5,
        borderColor: 'grey'
    }

});

export default LabelStyles;