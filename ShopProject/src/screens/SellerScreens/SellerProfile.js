import { View, Text, SafeAreaView, Alert, ImageBackground, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react';
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AppColors from '../../assets/colors/AppColors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import BackButtonHeader from '../../components/headers/BackButtonHeader';
const SellerProfile = props => {
  const [sellerName, setSellerName] = useState('')
  const [sellerEmail, setSellerEmail] = useState('')
  const [sellerPassword, setSellerPassword] = useState('')
  const [sellerProfileImg, setSellerProfileImg] = useState('')
  const handleSubmit = () => {
    setSellerName(sellerName);
    setSellerPassword(sellerPassword);
    setSellerEmail(sellerEmail);
   Alert.alert(`${sellerName, sellerEmail, sellerPassword}`);
  }
  const openImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.error) {
        console.log('image uri', response.assets[0].uri);
        setSellerProfileImg(response.assets[0].uri)
      }
    })
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DDDDDD" }}>
      <ScrollView>
        <StatusBar backgroundColor={AppColors.primary} />
        <ImageBackground source={require('../../assets/images/profile.png')} style={{ width: wp('100'), height: hp('100'), justifyContent: 'center', alignItems: 'center' }}>
          <BackButtonHeader props={props} title={'profile'} />

          <View style={{ marginTop: hp('35') }}>
            <TouchableOpacity onPress={() => {
              openImagePicker()
            }}>
              <View>
                {sellerProfileImg == "" ? (
                  <Ionicons name='camera-outline' size={34} color={'white'} style={Styles.sellerProfileIcon} />
                ) : (
                  <Image source={{ uri: sellerProfileImg }} style={Styles.sellerProfileImage} />
                )}
              </View>
            </TouchableOpacity>
            <Neomorph style={[Styles.Neomorphstyle]}>
              <TextInput placeholderTextColor={'grey'}
                placeholder="UserName"
                value={sellerName}
                onChangeText={setSellerName}
                style={[Styles.textinputstyle]}
              />
            </Neomorph>
            <Neomorph style={[Styles.Neomorphstyle]}>
              <TextInput placeholderTextColor={'grey'}
                placeholder="Email"
                value={sellerEmail}
                onChangeText={setSellerEmail}
                style={[Styles.textinputstyle]}
              />
            </Neomorph>
            <Neomorph style={[Styles.Neomorphstyle]}>
              <TextInput placeholderTextColor={'grey'}
                placeholder="Password"
                value={sellerPassword}
                onChangeText={setSellerPassword}
                style={[Styles.textinputstyle]}
                secureTextEntry
              />
            </Neomorph>
            <TouchableOpacity
              onPress={() => {
                if (sellerName.length != 0 && sellerEmail.length != 0 && sellerPassword.length != 0) {
                  handleSubmit()
                } else (
                  Alert.alert('Fill data carefully input field must not be empty')
                )
              }}
            >
              <LinearGradient colors={['#08d4c4', '#01ab9d']} style={[Styles.forgetPasswordbtn]}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Update Pofile</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground></ScrollView>

    </SafeAreaView>

  )
}

export default SellerProfile;
const Styles = StyleSheet.create({
  Neomorphstyle: {
    shadowRadius: 10,
    borderRadius: 25,
    backgroundColor: '#DDDDDD',
    width: wp('88'),
    height: hp('9'),
    marginTop: wp('5'),
    // marginLeft: widthPercentageToDP('5'),
  },
  textinputstyle: {
    fontFamily: 'Poppins-Regular',
    margin: wp('2'),

  },
  forgetPasswordbtn: {
    height: hp('8%'),
    width: wp('70%'),
    backgroundColor: AppColors.background,
    fontFamily: 'Poppins-black',
    marginTop: wp('5'),
    color: 'white',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  sellerProfileImage: {
    width: wp('39%'),
    height: wp('37%'),
    borderRadius: 100,
    marginTop: hp('-27%'),
    justifyContent: 'center',
    alignSelf: 'center'
  },
  sellerProfileIcon: {

    borderRadius: 100,
    marginTop: hp('-16'),
    justifyContent: 'center',
    alignSelf: 'center'
  }
});