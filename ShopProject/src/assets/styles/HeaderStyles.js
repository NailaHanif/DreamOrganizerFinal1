import { StyleSheet } from "react-native";
import AppColors from "../colors/AppColors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const HeaderStyles = StyleSheet.create({
    drawerHeader: {
        flex: 1,
        alignItems: "center",
        backgroundColor: AppColors.background
    },
    backButtonHeader: {
        flexDirection: "row",
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: AppColors.primary,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 15
    },
    DrawerContentHeader: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: AppColors.primary,
        justifyContent: 'center',
        alignItems: "center",
        paddingHorizontal: 15
    },
    headerStyle: {
        justifyContent: "space-between",
        // backgroundColor:AppColors.primary,
        backgroundColor: AppColors.primary,
        width: wp('100%'),
        height: hp('8%'),
        padding: hp(1),
        fontFamily: 'Poppins-black',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center'

    }, SellerDrawer: {
        flexDirection: "row",
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: AppColors.primary,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 15
    }
});
export default HeaderStyles;