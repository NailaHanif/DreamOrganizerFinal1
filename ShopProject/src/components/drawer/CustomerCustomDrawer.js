import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView
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
import AppColors from '../../assets/colors/AppColors';
// import { useNavigation } from '@react-navigation/native';
const CustomerCustomDrawer = (props) => {
  // const navigation=useNavigation();
  return (
  
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
      <LinearGradient colors={['#fff',AppColors.primary]} style={[ImageStyles.drawerBackgroundImage]}>
        <Image source={require('../../assets/images/profile.jpg')} style={[ImageStyles.ProfilePic]}/>
        <Text style={{fontFamily:'Poppins-Regular',color:'white'}}>Dream Organizers</Text>
      </LinearGradient>
      <View style={{padding:10}}>
      
      </View>
    <DrawerItemList {...props}/>
    <View style={{paddingTop:10}}>
    <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc',}}>
       <TouchableOpacity onPress={() => {}} style={{paddingVertical: 5}}>
         <View style={{flexDirection: 'row',padding:8, }}>
           <Ionicons name="share-social-outline" size={22} color={"grey"}/>
           <Text
             style={{
               fontSize: 15,
               fontFamily: 'Poppins-Regular',
               marginHorizontal: 15,
               color:'grey'
             }}>
             Tell a Friend
           </Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {props.navigation.navigate('Login')}}  style={{paddingHorizontal:10}}>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
           <Ionicons name="exit-outline" size={22} color={"grey"} />
           <Text
             style={{
               fontSize: 15,
               fontFamily: 'Poppins-Regular',
               marginHorizontal: 15,
               color:"grey"
             }}>
             Sign Out
           </Text>
         </View>
       </TouchableOpacity>
     </View>
    </View>
    
    </DrawerContentScrollView>

  
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

export default CustomerCustomDrawer;