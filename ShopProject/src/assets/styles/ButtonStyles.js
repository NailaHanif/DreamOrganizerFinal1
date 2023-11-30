import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AppColors from "../colors/AppColors";
const ButtonStyles = StyleSheet.create({
    neomorphButtons: {
        width: wp('60%'),
        height: wp('15%'),
        marginHorizontal: 10,
        borderRadius: wp('35%'),
        shadowRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.primary,
        marginTop: 10,
        marginBottom:10

    },
    text: {
        color: "#CAD6E6",
        margin: 10,
        fontSize: 20

    },
    forgetPasswordbtn: {
        height: hp('8%'),
        width: wp('70%'),
        backgroundColor: AppColors.background,
        fontFamily: 'Poppins-black',
        marginTop: wp('5%'),
        color: 'white',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    paymentBtn: {
        height: hp('8%'),
        width: wp('70%'),
        backgroundColor: AppColors.background,
        fontFamily: 'Poppins-black',
        marginTop: 10,
        color: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    chooseImage: {
        height: hp('5%'),
        width: wp('30%'),
        borderRadius: 15,
        textAlign: 'center',
        fontFamily: 'Poppins-Black',
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }
});

export default ButtonStyles;