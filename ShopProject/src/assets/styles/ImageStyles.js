import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ImageStyles = StyleSheet.create({
  IntroImg: {
    width: wp('70%'),
    height: hp('40%')
  },
  loginBackground: {
    height: 200,
    width: 400,
  },
  cartImage: {
    width: wp('85%'),
    height: hp('35%'),
  },
  categoryImage: {
   
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: 100,
    marginTop:hp('6%')
  },
  innerCategoryImg: {
    width: wp('41%'),
    height: hp('15%'),
    borderRadius: 10,
    // marginTop:wp('-13%')
  },
  SubCategoryCard: {
    width: wp('45%'),
    height: hp('20%'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  ProfilePic: {
    borderRadius: 100,
    //   backgroundColor: '#2EE4D5',
    width: wp('25%'),
    height: wp('25%'),
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop:wp('70%'),
    marginHorizontal: wp('40%')
  },
  drawerBackgroundImage: {
    width: wp('100%'),
    height: hp('26%'),
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categorySlider: {
    width: wp('90%'),
    height: wp('50%'),
    margin: 10,
    opacity: 1,
    borderRadius: 10,
    Opacity: 0.5,
  },
  swiperView: {
    flex: 1,
  },
  swiperImage: {
    width: '90%',
    height: hp('35%'),
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 25,
    alignSelf: 'center'
  },
  ProductCardImage: {
    height: hp('35%'),
    width: wp('48%'),
    borderRadius: 20,
    justifyContent: 'flex-end',
    margin: 5,
    padding: 10

  },
  SingleProductBackGroundImage: {
    width: wp('100%'),
    height: hp('40%'),
    margin: 0,
    padding: 0
  },
  addProductImg: {
    width: wp('90%'),
    height: hp('40%'),
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: 'grey'
  }, addProductImg: {
    shadowRadius: 10,
    borderRadius: 25,
    backgroundColor: '#DDDDDD',
    width: wp('90%'),
    height: hp('30%'),
    marginTop: wp('8%'),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp('-0%')
    // marginLeft: 35,
  },
  circleImage: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: 100,
    // marginTop: hp('-22.7%'),
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
export default ImageStyles;
