import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Touchable,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import ImageStyles from '../../assets/styles/ImageStyles';
import ContainerStyles from '../../assets/styles/ContainerStyles';
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
import DrawerItemCard from '../DrawerItemCard';
import HeaderStyles from '../../assets/styles/HeaderStyles';
import LabelStyles from '../../assets/styles/LabelStyles';
import AppColors from '../../assets/colors/AppColors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { useNavigation } from '@react-navigation/native';
const SellerCustomDrawer = props => {
  const orderAction = () => {
    props.navigation.navigate('Orders');
    console.log('orders');
  };
  const profileAction = () => {
    props.navigation.navigate('SellerProfile');
  };
  const AddProductsAction = () => {
    props.navigation.navigate('AddProducts');
  };
  const myProductsAction = () => {
    props.navigation.navigate('MyProducts');
  };
  const settingsAction = () => {
    props.navigation.navigate('Settings');
  };
  const aboutUsAction = () => {
    props.navigation.navigate('AboutUs');
  };
  const helpAction = () => {
    props.navigation.navigate('Help');
  };
  const sellerDrawerItems = [
    {
      id: 1,
      name: 'Categories',
      action: orderAction,
    },
    {
      id: 2,
      name: 'Profile',
      action: profileAction,
    },
    {
      id: 3,
      name: 'Add Product',
      action: AddProductsAction,
    },
    {
      id: 4,
      name: 'My Poducts',
      action: myProductsAction,
    },
    {
      id: 5,
      name: 'Settings',
      action: settingsAction,
    },
    {
      id: 6,
      name: 'About Us',
      action: aboutUsAction,
    },
    {
      id: 7,
      name: 'Help',
      action: helpAction,
    },
    {
      id: 8,
      name: 'TermsAndConditions',
      action: helpAction,
    },
    {
      id: 9,
      name: 'Privacy Policy',
      action: helpAction,
    },
    {
      id: 10,
      name: 'Logout',
      action: helpAction,
    },
  ];
  // const navigation=useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      <View style={[HeaderStyles.SellerDrawer]}>
        <Text style={[LabelStyles.headingMdDark, { color: 'white' }]}>Menu</Text>
        <View style={[ContainerStyles.rowContainer]}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
            <Ionicons
              name="settings-outline"
              size={22}
              color={'white'}
            />
          </TouchableOpacity>

        </View>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: '#DDDDD', width: wp('100'), height: hp('20'), }}>
        <View>
          <Image
            source={require('../../assets/images/profile.jpg')}
            style={[ImageStyles.ProfilePic]}
          /></View>
        <View style={{ marginTop: wp('10') }}>
          <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>
            Dream Seller
          </Text>
          <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>
            itzme9770@gmail.com
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SellerProfile')}>
            <Text style={{ fontFamily: 'Poppins-Regular', color: 'grey' }}>
              See profile
            </Text>
          </TouchableOpacity></View>
      </View>
      <View style={{ borderWidth: 0.5, borderColor: 'grey', margin: 10, flexDirection: 'row', width: wp('90') }}></View>

      <View style={{ padding: 5, backgroundColor: '#DDDDDD' }}>
        <FlatList
          data={sellerDrawerItems}
          // horizontal
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={item.action}>
                <DrawerItemCard item={item} props={props} />
              </TouchableOpacity>
            );
          }}
        />
      </View>

    </View>

    // <SafeAreaView style={{flex: 1}}><View >
    //   <DrawerContentScrollView
    //     {...props}
    //     contentContainerStyle={{backgroundColor: '#8200d6'}}>
    //     <ImageBackground
    //       source={require('../../assets/images/party.jpg')}
    //       style={{padding: 20}}>
    //       <Image
    //         source={require('../../assets/images/couple.jpg')}
    //         style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
    //       />
    //       <Text
    //         style={{
    //           color: '#fff',
    //           fontSize: 18,
    //           fontFamily: 'Poppins-Black',
    //           marginBottom: 5,
    //         }}>
    //         John Doe
    //       </Text>
    //       <View style={{flexDirection: 'row'}}>
    //         <Text
    //           style={{
    //             color: '#fff',
    //             fontFamily: 'Poppins-Black',
    //             marginRight: 5,
    //           }}>
    //           280 Coins
    //         </Text>
    //         <FontAwesome5 name="coins" size={14} color="#fff" />
    //       </View>
    //     </ImageBackground>
    //     <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
    //       <DrawerItemList {...props} />
    //     </View>
    //   </DrawerContentScrollView>
    //   <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
    //     <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
    //       <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //         <Ionicons name="share-social-outline" size={22} />
    //         <Text
    //           style={{
    //             fontSize: 15,
    //             fontFamily: 'Poppins-Thin',
    //             marginLeft: 5,
    //           }}>
    //           Tell a Friend
    //         </Text>
    //       </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
    //       <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //         <Ionicons name="exit-outline" size={22} />
    //         <Text
    //           style={{
    //             fontSize: 15,
    //             fontFamily: 'Poppins-Thin',
    //             marginLeft: 5,
    //           }}>
    //           Sign Out
    //         </Text>
    //       </View>
    //     </TouchableOpacity>
    //   </View>
    // </View></SafeAreaView>
  );
};

export default SellerCustomDrawer;
