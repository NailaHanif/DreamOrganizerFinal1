import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import HeaderStyles from '../../assets/styles/HeaderStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {heightPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen';
const BackButtonHeader = ({title, props}) => {
  return (
    <View style={[HeaderStyles.backButtonHeader]}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}>
          <View style={{width:wp('20'),height:heightPercentageToDP('5')}}>
        <FontAwesome name="chevron-left" size={22} color={'#fff'} />
          </View>
      </TouchableOpacity>
      <Text
        style={{color: '#fff', fontSize: wp('5%'), fontFamily: 'Poppins-regular',}}>
        {title}
      </Text>
    </View>
  );
};
export default BackButtonHeader;
