import {View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useContext, useState} from 'react';
import {Neomorph, Shadow} from 'react-native-neomorph-shadows-fixes';
import ImageStyles from '../assets/styles/ImageStyles';
import AppContext from '../context/AppContext';
import NeomorphStyles from '../assets/styles/NeomorphStyles';
const SubCategoryCard = ({item,props}) => {
  const {storeSelectedSC, selectedC} = useContext(AppContext);
  const handleCardPress = () => {
    storeSelectedSC(item.name);
    props.navigation.navigate('Products');
  };
  
  return (
    <SafeAreaView style={{flex:1}}>
      <Neomorph style={[NeomorphStyles.subCatCard,{marginBottom:8}]}>
      <TouchableOpacity onPress={handleCardPress}>
          <Image source={item.image} style={[ImageStyles.SubCategoryCard]} />
          {/* <Text> Price:{item.price}</Text> */}
          <Text    style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop:5,
              marginBottom: 10,
              fontFamily: 'Poppins-Black',
            }}> {item.name}</Text>
      </TouchableOpacity>
    </Neomorph>
    </SafeAreaView>
  );
};
export default SubCategoryCard;
