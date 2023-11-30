// AppIntroScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Image, TouchableOpacity, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import AppColors from '../../assets/colors/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons'

import ImageStyles from '../../assets/styles/ImageStyles';
import LabelStyles from '../../assets/styles/LabelStyles';
const handleIntroClose = ({ navigation }) => {
  setShowIntro(false);
  // You might want to store a value in AsyncStorage indicating that the intro has been shown
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  arrowButton: {
    position: 'absolute',
    top: 20, // Adjust this value to position the arrow button from the top
    right: 20, // Adjust this value to position the arrow button from the right
  },
  button: {
    alignItems: 'flex-end',
    fontFamily: 'Poppins-Black',
    marginTop: 30,
  },
});

const AppIntroScreen = ({ navigation, onClose }) => {
  const [showIntro, setShowIntro] = useState(true);

  const handleContinue = () => {
    // Navigate to the main content of the app
    navigation.replace('SplashScreen');
  };
  const introArr = [{
    id: 1,
    // title: `wellcome to ${AppName}`,
    title: ' Welcome to Dream organizer App',
    subtitle: " Making Your Events Beautiful",
    image: require('../../assets/images/illuatration/plan.png')
  },
  {
    id: 2,
    title: "Discover Lovely Designs",
    subTitle: ' Take a look at our pretty decoration ideas. We have lots of choices to make your event look nice and stylish.',
    image: require('../../assets/images/illuatration/shedule.png')
  },
  {
    id: 3,
    title: "Be creative! Make Your Own Design",
    subTitle: ' If you have your own ideas, you can create your decorations too. It is easy to do, and you can make it just the way you like.',
    image: require('../../assets/images/illuatration/vendor.png')
  },
  {
    id: 4,
    title: "Booking Made Simple",
    subTitle: 'Booking with us is easy and safe. You can pay securely with your card, so you dont need to worry.',
    image: require('../../assets/images/illuatration/vendor.png')
  },
  {
    id: 5,
    title: "Pick Who You Like,Your Choice!",
    subTitle: ' You can choose one of our trusted people to do the decorations, or you can bring your own. It is up to you.',
    image: require('../../assets/images/illuatration/vendor.png')
  }, {
    id: 6,
    title: "Booking Made Simple",
    subTitle: 'Booking with us is easy and safe. You can pay securely with your card, so you dont need to worry.',
    image: require('../../assets/images/illuatration/vendor.png'),
    screen: `let's start`
  },]
  //   useEffect(()=>{
  //     setTimeout(()=>{
  //  navigation.replace('Login');
  // console.log('setTime Out');
  //     },7000)
  //   },[])
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      {/* <View> */}
      {/* <View> 
      <TouchableOpacity
      style={styles.arrowButton}
      onPress={() => {
        console.log("Arrow button pressed"); // Add this line to check if the button is pressed
        navigation.navigate('SplashScreen');
      }}
      >
      <Ionicons name='arrow-forward' size={30} color={AppColors.primary} />
    </TouchableOpacity>
    </View> */}
      <Swiper autoplay autoplayTimeout={3}>
        {introArr.map((item, index) => {
          return (
            <View style={{ flex: 1 }} >
              <View style={styles.container} key={index}>
                <Image source={item.image} style={[ImageStyles.IntroImg]} />
                <Text style={[LabelStyles.introTitle]}>{item.title}</Text>
                <Text style={[LabelStyles.introSubTitle]}>{item.subTitle}</Text>
                <TouchableOpacity onPress={navigation.navigate('SellerLogin')}>
                  <Text>{item.screen}</Text>
                </TouchableOpacity>
              </View>

            </View>
          );
        })}
      </Swiper>

      {/* </View> */}
    </View>
  );

};

export default AppIntroScreen;
