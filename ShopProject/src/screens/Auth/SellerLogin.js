import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
import NeomorphStyles from '../../assets/styles/NeomorphStyles';
import TextFieldStyles from '../../assets/styles/TextFieldStyles';
import { clockRunning } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppContext from '../../context/AppContext';
import axios from 'axios'
const SellerSignup = () => {
  const {baseUrl}=useContext(AppContext)
  const navigation = useNavigation()
  const [vendorName,setVendorName]=useState('');
  const [vendorEmail,setVendorEmail]=useState('');
  const [vendorPassword,setVendorPassword]=useState('');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
 
  const [vendorNameError,setVendorNameError]=useState('');
  const [vendorEmailError,setVendorEmailError]=useState('');
  const [vendorPasswordError,setVendorPasswordError]=useState('');
  //functions
  const isValidVendorName=vendorName=>{
    const vendorNamePattern = /^[a-zA-Z0-9_]{3,16}$/;
    return vendorNamePattern.test(vendorName)
   }
  const  isValidEmail=vendorEmail=>{
   const  emailPattern= /\S+@\S+\.\S+/;
    return emailPattern.test(vendorEmail)
  }
  const isValidPassword=vendorPassword=>{
    return vendorPassword.length>=8
  }
  const vendorSignup=()=>{
    if(!vendorName){
      setVendorNameError('Please enter your vendorname.')
    } else if(!isValidVendorName(vendorName)){
      setVendorNameError('please enter valid vendorname without spaces.')
    }
    if(!vendorEmail){
      setVendorEmailError('please enter email.')
    }else if(!isValidEmail(vendorEmail)){
      setVendorEmailError('Please enter valid email.')
    }
    if(!vendorPassword){
      setVendorPasswordError('Enter your password')
    }else if(!isValidPassword(vendorPassword)){
      setVendorPasswordError('password must be 8 characters long')
    }
    if(!vendorName || !vendorEmail || !vendorPassword|| !isValidVendorName(vendorName)|| !isValidEmail(vendorEmail) || !isValidPassword(vendorPassword)){
      return false;
    } 
    const formData=new FormData();
    formData.append('vendorEmail',vendorEmail)
    formData.append('vendorPassword',vendorPassword)
    axios({
        method: 'post',
  
        url: `${baseUrl}/vendorLogin`,
  
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'},
      })
        .then(function (response) {
          if (response.data.match == true) {
            AsyncStorage.setItem(
              'vendor',
              JSON.stringify(response.data.loggedInUser),
            );
            navigation.navigate('VendorDrawer');
          } else {
            alert('No User found with this email and password');
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response);
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
            vendorname
          </Text>
          <View style={styles.action}>
          <TextInput
                placeholder="Enter vendor Name"
                // maxLength={20}
                style={[TextFieldStyles.textInput]}
                // style={{fontFamily:'Poppins-Thin'}}
                value={vendorName}
                onChangeText={text => {
                  setVendorName(text);
                  setVendorNameError('');
                }}
              />
            {vendorName? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {!vendorName ?  (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                {vendorNameError}
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
              value={vendorEmail}
              autoCapitalize="none"
              onChangeText={text=>{
                setVendorEmail(text);
                setVendorEmailError('')
              }}
            />
          </View>
          {vendorEmailError ?  (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                {vendorEmailError}
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
              onChangeText={text => {setVendorPassword(text);
                setVendorPasswordError('')
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
          {vendorPasswordError?  (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                {vendorPasswordError}
              </Text>
            </Animatable.View>
          ):null}
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={vendorSignup}>
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
              onPress={() => navigation.navigate('SellerLogin')}
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
