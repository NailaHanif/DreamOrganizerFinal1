import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import HeaderStyles from '../../assets/styles/HeaderStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {heightPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen';
const DrawerContentHeader = ({title, props}) => {
  return (
    <View style={[HeaderStyles.DrawerContentHeader]}>
      <Text
        style={{color: '#fff', fontSize: wp('6%'), fontFamily: 'Poppins-Black',}}>
        {title}
      </Text>
    </View>
  );
};
export default DrawerContentHeader;
