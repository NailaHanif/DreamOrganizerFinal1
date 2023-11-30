import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Link, useTheme } from '@react-navigation/native';
import AppColors from '../../assets/colors/AppColors';
// const navigation=useNavigation()
const SplashScreen = ({ navigation }) => {
  return (
    // <ImageBackground source={require('../../assets/images/dologo.jpg')}
    // style={[styles.container, {backgroundColor: 'white'}]}>
    <View style={styles.container} >
      {/* <LinearGradient colors={['#08d4c4', '#01ab9d']}> */}
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      {/* </LinearGradient> */}
      <LinearGradient style={styles.header} colors={[AppColors.primary, AppColors.primary]}>
        <View >
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('../../assets/images/dologo.png')}
            style={[styles.logo, { backgroundColor: 'white' }]}
            resizeMode="stretch"
          />
        </View>
      </LinearGradient>
      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig">
        <Text
          style={
            styles.title
          }>
          Let's organize your dream event with us!
        </Text>
        <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Sign in with account
        </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <LinearGradient
              colors={[AppColors.lightGradient, AppColors.darkGradient]}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SellerSignup')}>
            <Text style={{ color: 'black', margin: 5, fontFamily: 'Poppins-Regular' }}>want to become a
              <Link to={'/SellerSignup'} style={{ color: AppColors.primary, marginTop: 10 }}> seller?</Link>
            </Text>

          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
    // </ImageBackground>


  );
};
export default SplashScreen;
const { height } = Dimensions.get('window');
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Black'
  },
  footer: {
    flex: 1.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
  },
  text: {
    // color: 'grey',
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
    fontSize: 14
  },
  button: {
    alignItems: 'flex-end',
    fontFamily: 'Poppins-Black',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    // fontWeight: 'bold',
  },
});
