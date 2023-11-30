import React, { useContext } from 'react';
import {TouchableOpacity, View,Image, Text} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows-fixes';
import ContainerStyles from '../../assets/styles/ContainerStyles';
import LabelStyles from '../../assets/styles/LabelStyles';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../../context/AppContext'
import AppColors from '../../assets/colors/AppColors';
const YourTypeCard = ({item,navigation}) => {
  // const {storeSelectedHC}=useContext(AppContext)
  navigation=useNavigation();
         return (
    <TouchableOpacity onPress={()=>{
          storeSelectedHC(item.title);
          navigation.navigate('Categories');
    }} style={{color:"#447EAE"}}>
      <Neomorph
        style={[
          ContainerStyles.squareBoxHalfScreenContainer,
          ContainerStyles.centeredContentContainer,
        ]}>
        {/* <FontAwesome
          name={item.iconName}
          size={wp('20')}
          color={AppColors.primary}
        /> */}
        <Image source={item.imageUri}  style={[ContainerStyles.imageBox]}/>
        <Text style={[LabelStyles.headingMdDark, {marginTop: 15,color:"steelblue"}]}>
          {item.title}
        </Text>
      </Neomorph>
    </TouchableOpacity>
  );
};

export default YourTypeCard;
