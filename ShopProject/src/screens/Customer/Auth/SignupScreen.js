import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AppColors from '../../../assets/colors/AppColors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const SellerSignup = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userNameError, setUserNameError] = useState('');
  const [userEmailError, setUserEmailError] = useState('');
  const [userPasswordError, setUserPasswordError] = useState('');

  const isValidUserName = (userName) => {
    const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
    return usernamePattern.test(userName);
  };

  const isValidEmail = (userEmail) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(userEmail);
  };

  const isValidPassword = (userPassword) => {
    return userPassword.length >= 8;
  };

  const userSignup = () => {
    if (!userName || !isValidUserName(userName)) {
      setUserNameError('Please enter a valid username without spaces.');
    } else {
      setUserNameError('');
    }

    if (!userEmail || !isValidEmail(userEmail)) {
      setUserEmailError('Please enter a valid email.');
    } else {
      setUserEmailError('');
    }

    if (!userPassword || !isValidPassword(userPassword)) {
      setUserPasswordError('Password must be 8 characters long.');
    } else {
      setUserPasswordError('');
    }

    if (
      !userName ||
      !isValidUserName(userName) ||
      !userEmail ||
      !isValidEmail(userEmail) ||
      !userPassword ||
      !isValidPassword(userPassword)
    ) {
      return false;
    }

    const formData = new FormData();
    formData.append('name', userName);
    formData.append('email', userEmail);
    formData.append('password', userPassword);

    setLoading(true);

    axios({
      method: 'post',
      url: `${baseUrl}/customerSignup`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        setLoading(false);

        if (response.data.save === true) {
          // Save the token to AsyncStorage
          AsyncStorage.setItem('customerToken', response.data.token);
          navigation.navigate('CustomerDrawer');
        } else if (response.data.save === false) {
          setUserEmailError('A user with this Email Address Already Exists');
        } else {
          alert('Account cannot be created! Please try again later.');
        }
      })
      .catch(function (response) {
        setLoading(false);
        console.log('Error:', response);
      });
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={[
            styles.footer,
            {
              backgroundColor: '#FFFFFF',
            },
          ]}>
          <Text
            style={styles.text_footer}>
            Username
          </Text>
          <View style={styles.action}>
          <TextInput
                placeholder="Enter User Name"
                // maxLength={20}
                style={[TextFieldStyles.textInput]}
                // style={{fontFamily:'Poppins-Thin'}}
                value={userName}
                onChangeText={text => {
                  setUserName(text);
                  setUserNameError('');
                }}
              />
            {userName? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {!userName ?  (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                {userNameError}
              </Text>
            </Animatable.View>
          ):null}
          <Text
            style={
              {
                color: 'grey',
                marginTop: 10,
                fontFamily: 'Poppins-Regular'
              }}
          >
            Email
          </Text>
          <View style={styles.action}>
            <Feather name="mail" color="grey" size={20} />
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#666666"
              keyboardType='email-address'
              value={userEmail}
              autoCapitalize="none"
              onChangeText={text=>{
                setUserEmail(text);
                setUserEmailError('')
              }}
            />
          </View>
          {userEmailError ?  (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                {userEmailError}
              </Text>
            </Animatable.View>
          ):null}
          
          <Text
            style={[
              styles.text_footer,
              {
                color: 'grey',
                marginTop: 10,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="grey" size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#666666"
              secureTextEntry={!isVisiblePassword}
              style={[
                styles.textInput,
                {
                  color: 'grey',
                },
              ]}
              autoCapitalize="none"
              onChangeText={text => {setUserPassword(text);
                setUserPasswordError('')
              }}
            />
            <TouchableOpacity onPress={()=>{
              setIsVisiblePassword(!isVisiblePassword)
            }}>
              {isVisiblePassword? (
                <Feather name="eye" color="grey" size={20} />
              ) : (
                <Feather name="eye-off" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {userPasswordError?  (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                {userPasswordError}
              </Text>
            </Animatable.View>
          ):null}
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={userSignup}>
              <LinearGradient
                colors={[AppColors.lightGradient, AppColors.darkGradient]}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSignupbtn,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Sign up
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={
                {
                  borderColor: AppColors.primary,
                  marginTop: 15
                }}>
              <Text
                style={
                  styles.textSign
                }>
                already have an account? <Text style={{ color: AppColors.primary }}>Log in</Text>
              </Text>
            </TouchableOpacity>
            <Text></Text>
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};
export default SellerSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  footer: {
    flex: 3,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 30,
    fontFamily: "Poppins-SemiBold",
    marginTop: 50,
    alignSelf:'center'
  },
  text_footer: {
    color: 'grey',
    fontSize: 18,
    fontFamily: 'Poppins-Regular'
  },
  action: {
    // shadowRadius: 10,
    // borderRadius: 20,
    // backgroundColor: '#ffffff',
    // width: wp('90%'),
    // height: hp('9%'),
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    fontFamily: "Poppins-Regular"

  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    fontFamily: "Poppins-Regular"
  },
  button: {
    alignItems: 'center',
    marginTop: 35,
  },
  signIn: {
    width: wp('85%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  textSignupbtn: {
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: 'grey'
  },
  textSign: {
    fontSize: 12,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: 'grey'
  },
  text: {
    color: 'grey',
    fontFamily: 'Poppins-Regular'

  },
});
