import React, { useContext } from 'react';
import {TouchableOpacity,Image, View, Text} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows-fixes';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/styles/ContainerStyles';
import LabelStyles from '../../assets/styles/LabelStyles';
import OtherStyles from '../../assets/styles/OtherStyles';
import AppContext from '../../context/AppContext';
import { useNavigation } from '@react-navigation/native';

const CatCard = ({navigation,item}) => {
   const {storeSelectedProduct,isaddedIntoCart,storeSelectedSC,storeIsAddedIntoCart} = useContext(AppContext); 
   return (
    <TouchableOpacity onPress={()=>{
      storeSelectedSC(item.title);
      navigation.navigate('Products');

    }}>
      <Neomorph
        swapShadows // <- change zIndex of each shadow color
        style={[
          ContainerStyles.squareBoxHalfScreenContainer,
          OtherStyles.p10,{height:hp('30'),}
        ]}>
        <Image source={{uri:item.imageUri}} style={{height:wp('30'),width:wp('30'),alignSelf:"center"}} />
        <Text style={[LabelStyles.headingSmDark, {marginTop: 15}]}>
          {item.title}
        </Text>
        <View style={{ height:hp('30'),paddingHorizontal:0,justifyContent:"space-between",flexDirection:"row"}}>
        <Text style={[LabelStyles.headingSmDark, {marginTop: 10}]}>
        Rs. {item.price}- 
        </Text>
        <TouchableOpacity style={{marginTop: 10}} onPress={()=>{
          storeIsAddedIntoCart();
        }}>
            <FontAwesome name='heart' size={24} color={isaddedIntoCart?AppColors.red:AppColors.charcol} />
        </TouchableOpacity>
        </View>
      </Neomorph>
    </TouchableOpacity>
  );
};
export default CatCard;
