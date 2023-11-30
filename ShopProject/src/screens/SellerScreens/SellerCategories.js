import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {navigation } from 'react'
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import ContainerStyles from '../../assets/styles/ContainerStyles';
import DrawerContentHeader from '../../components/headers/DrawerContentHeader';
import DrawerHeader from '../../components/headers/DrawerHeader';
import AppColors from '../../assets/colors/AppColors';

const SellerCategories= props =>{
  // const navigation=useNavigation()
  return(
    <SafeAreaView  style={{backgroundColor:'#DDDDDD',flex:1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <DrawerHeader props={props} />
    <View style={[ContainerStyles.fullScreenCenteredContainer,{padding:10}]}>
      <Text style={{fontFamily:'Poppins-SemiBold',fontSize:30,color:AppColors.primary}}>Select Your Category</Text>
     <TouchableOpacity onPress={() => props.navigation.navigate('AddProducts',{ category: 'Wedding' })}>
      <Neomorph
  style={[Styles.Neomorphstyle]}
>
  <Text style={Styles.innertext}>
  {/* <FontAwesome name="user" size={20} color="#009387"  /> */}
    Wedding
  </Text>
 
</Neomorph>
</TouchableOpacity> 
<TouchableOpacity  onPress={() => props.navigation.navigate('AddProducts',{ category: 'Birthday' })}>
<Neomorph
  style={[Styles.Neomorphstyle]}
>
  <Text style={[Styles.innertext]}>
  {/* <FontAwesome name="user" size={20} color="#009387"  style={{ marginRight: 10 }} /> */}
    Birthday
  </Text>
</Neomorph>
</TouchableOpacity> 
<TouchableOpacity  onPress={() => props.navigation.navigate('AddProducts',{ category: 'Islamic' })}>
<Neomorph
  style={[Styles.Neomorphstyle]}
>
  <Text style={[Styles.innertext]}>
  {/* <FontAwesome name="user" size={20} color="#009387" style={{ marginRight: 10 }}  /> */}
    Islamic
  </Text>
</Neomorph>
</TouchableOpacity>
<TouchableOpacity  onPress={() => props.navigation.navigate('AddProducts',{ category: 'parties' })}>
<Neomorph
  style={[Styles.Neomorphstyle]}
>
  <Text style={[Styles.innertext]}>
  {/* <FontAwesome name="user" size={20} color="#009387"  style={{ marginRight: 10 }} /> */}
    Parties
  </Text>
</Neomorph>
</TouchableOpacity>
<TouchableOpacity  onPress={() => props.navigation.navigate('AddProducts',{ category: 'Educational' })}>
<Neomorph
  style={[Styles.Neomorphstyle]}
>
  <Text style={[Styles.innertext]}>
  {/* <FontAwesome name="user" size={20} color="#009387" style={{ marginRight: 10 }}  /> */}
  Educational 
  </Text>
</Neomorph>
</TouchableOpacity>
<TouchableOpacity  onPress={() => props.navigation.navigate('AddProducts',{ category: 'Others' })}>
<Neomorph
  style={[Styles.Neomorphstyle]}
>
  <Text style={[Styles.innertext]}>
  {/* <FontAwesome name="user" size={20} color="#0s09387" style={{ marginRight: 10, }}  /> */}
   Others
  </Text>
</Neomorph>
</TouchableOpacity>

    </View></ScrollView></SafeAreaView>
  )

}
export default SellerCategories;
const Styles=StyleSheet.create({
  textsyles:{
    color:AppColors.secondery,
    fontSize:30,
    fontFamily:'Poppins-Regular'
  },
  innertext:{
    color:AppColors.primary,
    fontSize:25,
    fontFamily:'Poppins-Regular',
    paddingLeft:wp('30'),
    paddingTop:20,
  },
    Neomorphstyle:{
      shadowRadius: 10,
        borderRadius: 20,
        backgroundColor: '#DDDDDD',
        width: wp('85'),
        height:hp('10.5'),
        margin: wp('5%'),
        justifyContent:"center"
        // marginLeft:35,

  },
})

