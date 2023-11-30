import React from 'react';
import {TouchableOpacity,Image, View, Text} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows-fixes';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/styles/ContainerStyles';
import LabelStyles from '../../assets/styles/LabelStyles'
import OtherStyles from '../../assets/styles/OtherStyles';
import AppContext from '../../context/AppContext';

const SingleItemCard = ({props,item}) => {
    const {is_favourite_added}=useContext(AppContext);
  return (
    <TouchableOpacity onPress={()=>{
      storeI
        props.navigation.navigate('Cart');
    }}>
      <Neomorph
        swapShadows // <- change zIndex of each shadow color
        style={[
          ContainerStyles.squareBoxHalfScreenContainer,
          OtherStyles.p10,{height:wp('48'),}
        ]}>
        <Image source={{uri:item.imageUri}} style={{height:wp('30'),width:wp('30'),alignSelf:"center"}} />
        <Text style={[LabelStyles.headingSmDark, {marginTop: 15}]}>
          {item.title}
        </Text>
        <View style={[ContainerStyles.rowContentContainer,{paddingHorizontal:0,justifyContent:"space-between"}]}>
        <Text style={[LabelStyles.headingSmDark, {marginTop: 15}]}>
          {item.price} Rs.
        </Text>
        <TouchableOpacity style={{marginTop: 15}}
      onPress={()=>{
        (!is_favourite_added)

      }}>
            <FontAwesome name='heart' size={24} color={is_favourite_added?red:AppColors.primary} />
        </TouchableOpacity>
        <Text style={[LabelStyles.headingSmDark, {marginTop: 15}]}>
          {item.description}
        </Text>
                </View>
              </Neomorph>
    </TouchableOpacity>
  );
};

export default SingleItemCard;
