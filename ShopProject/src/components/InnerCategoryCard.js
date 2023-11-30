import React, { useContext, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Neomorph, Shadow } from 'react-native-neomorph-shadows-fixes';
import AppColors from '../assets/colors/AppColors';

import ImageStyles from '../assets/styles/ImageStyles';
import NeomorphStyles from '../assets/styles/NeomorphStyles';
import AppContext from '../context/AppContext';
import StarRating from './StarRating';
const InnerCategoryCard = ({ item, props }) => {
  const { storeSelectedC } = useContext(AppContext);
  const handleCardPress = () => {
    // storeSelectedC(item.name);
    props.navigation.navigate('Subcategories');
  };
  return (
    <View style={{backgroundColor:AppColors.background}}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Products')}>
        <Neomorph style={[NeomorphStyles.innerCategoryCard]}>

          <View style={{ alignItems: 'center' }}>
            <Image source={item.image} style={[ImageStyles.innerCategoryImg]} />
          </View>
          {/* Your text */}

          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              // fontWeight: 'bold',
              margin: 5,

              fontFamily: 'Poppins-Regular',
            }}>  {item.name}
            {item.des}
          </Text>
          <StarRating /></Neomorph>
      </TouchableOpacity>
    </View>
  );
};
export default InnerCategoryCard;
