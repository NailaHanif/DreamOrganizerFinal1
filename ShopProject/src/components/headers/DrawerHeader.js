import React from 'react';
import {View, TouchableOpacity, Text,} from 'react-native';
import HeaderStyles from '../../assets/styles/HeaderStyles';
import Feather from 'react-native-vector-icons/Feather';
import {heightPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ContainerStyles from '../../assets/styles/ContainerStyles';
import LabelStyles from '../../assets/styles/LabelStyles';
import { useNavigation } from '@react-navigation/native';
//.....Function......
const DrawerHeader =() => {
  const navigation=useNavigation()
  return (
    <View
      style={[
        HeaderStyles.headerStyle,
        ContainerStyles.rowContainer,
        {justifyContent: 'space-between'},
      ]}>
      <Text style={ {color: 'white',fontFamily: 'Poppins-Regular',fontSize:15}}>Event Categories </Text>
      <View style={{width:wp('10'),height:heightPercentageToDP('5')}}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}>
        <Feather name="menu" size={wp('7%')} color={'#fff'} />
      </TouchableOpacity></View>
    </View>
  );
};

export default DrawerHeader;
