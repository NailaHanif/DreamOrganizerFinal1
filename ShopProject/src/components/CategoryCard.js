import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Neomorph, Shadow} from 'react-native-neomorph-shadows-fixes';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImageStyles from '../assets/styles/ImageStyles';
import NeomorphStyles from '../assets/styles/NeomorphStyles';
import AppContext from '../context/AppContext';
const CategoryCard = ({item, props}) => {
  const {storeSelectedC} = useContext(AppContext);
  const handleCardPress = () => {
    storeSelectedC(item.name);
    props.navigation.navigate('Subcategories');
  };
  return (
    <View style={{justifyContent:"center",alignItems:'center'}}>
      <TouchableOpacity onPress={handleCardPress}>
      <Neomorph
      style={{
        shadowRadius: 10,
        borderRadius: 25,
        backgroundColor: '#DDDDDD',
        width: wp('25%'),
        height:hp('12%'),
        margin: wp('2'),
        justifyContent:'center',
        alignItems:'center',
        // marginTop:hp('2%')
       
      }}
                      >
      <View   style={[NeomorphStyles.categoryCard]}>
     
     <View style={{alignItems: 'center'}}>
       
       <Image source={item.image} style={[ImageStyles.categoryImage]} />
     </View>
     {/* Your text */}
     <Text
       style={{
         color: 'black',
         textAlign: 'center',
         // fontWeight: 'bold',
         marginBottom: 30,
         fontFamily: 'Poppins-Regular',
       }}>
       {item.name}
     </Text></View>
              </Neomorph>
       
      </TouchableOpacity>
    </View>
  );
};
export default CategoryCard;
