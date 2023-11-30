import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Neomorph,Shadow} from 'react-native-neomorph-shadows-fixes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NeomorphStyles from '../assets/styles/NeomorphStyles';
const DrawerItemCard = ({item, props}) => {
  return (
    <View style={{flex: 1,backgroundColor:'#DDDDDD'}}>
     <Neomorph style={[NeomorphStyles.drawerItemCard]}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
          }}>
          {item.name}
        </Text>
      </Neomorph>
    </View>
  );
};
export default DrawerItemCard;
