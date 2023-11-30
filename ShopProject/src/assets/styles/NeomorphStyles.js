import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AppColors from "../colors/AppColors";
const NeomorphStyles = StyleSheet.create({
  categoryCard: {

    width: wp('30%'),
    height: hp('22%'),
    marginBottom: wp('2%')

  },
  innerCategoryCard: {
    shadowRadius: 100,
    borderRadius: 5,
    backgroundColor: '#DDDDDD',
    width: wp('45%'),
    height: hp('35%'),
    marginBottom: 8,
    paddingTop: 5,
    margin: 5,
    marginHorizontal: 10,
    marginTop: 8,
    alignItems: 'center'
  },
  smallCatSqrBox: {
    shadowOpacity: 0.5,
    shadowColor: '#009387',
    shadowRadius: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: wp('25%'),
    height: wp('25%'),
    marginBottom: 8,
    paddingTop: 5,
    margin: 5,
    marginHorizontal: 10,
    marginTop: 8,
    // borderWidth:0.3,
    // borderColor:'grey',
    justifyContent: 'center',
    alignItems: 'center',


  },
  subCatCard: {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 5,
    shadowColor: AppColors.background,
    shadowRadius: 8,
    borderRadius: 20,
    backgroundColor: AppColors.background,
    width: wp('45%'),
    height: hp('25%'),
    marginTop:8,
    marginBottom:8,
    marginHorizontal:8,
    marginVertical:8
  },
  cartCard: {
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 20,
    backgroundColor: '#fff',
    width: wp('95%'),
    height: hp('14%'),
    marginBottom: 8,
    paddingTop: 5,
    margin: 5,
    marginHorizontal: 10,
    marginTop: 8,
  },
  cartitemBtn: {
    height: hp('5%'),
    width: wp('25%'),
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    // marginHorizontal:10
  },
  profilePic: {
    shadowRadius: 1,
    borderRadius: 100,
    backgroundColor: AppColors.primary,
    width: wp('40%'),
    height: wp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerItemCard: {
    shadowRadius: 10,
    borderRadius: 5,
    backgroundColor: '#DDDDDD',
    width: wp('40%'),
    height: hp('10%'),
    margin: wp('3%'),
    // shadowColor:'#009387',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10

  },
  squareImg: {
    shadowRadius: 1,
    borderRadius: 100,
    backgroundColor: AppColors.primary,
    width: wp('40%'),
    height: wp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  neomorph_TextInput: {
    cartCard: {
      shadowOpacity: 0.3,
      shadowRadius: 2,
      shadowColor: '#333333',

    },
  }
})
export default NeomorphStyles;