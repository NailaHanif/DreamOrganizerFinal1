import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import NeomorphStyles from '../../assets/styles/NeomorphStyles'
import LabelStyles from '../../assets/styles/LabelStyles';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/styles/ContainerStyles';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
const OngoingOrders = (props) => {
  return (
    <Text>oeijhx</Text>
    // <View style={[ContainerStyles.fullsecren, { backgroundColor: '#FFFFFF' }]} >
    //   <BackButtonHeader props={props} title={'My Events'} />

    //   <Neomorph style={[NeomorphStyles.cartCard, { flex: 1, flexDirection: 'row', justifyContent: 'space-between' }]}>
    //     <View>
    //       <Image source={require('../../assets/images/dec1.jpg')} style={{ width: wp('20'), height: hp('12'), borderRadius: 10, margin: 5 }} />
    //     </View>
    //     <View style={{ margin: 10 }}><Text style={[LabelStyles.lightText,]}>Wedding</Text>
    //       <Text style={[LabelStyles.lightText,]}>Price: 250$-300$</Text>
    //       <Text style={[LabelStyles.lightText,]}>Date:21/8/2023</Text>
    //     </View>
    //     <View style={{ margin: 10 }}>
    //       <TouchableOpacity >
    //         <LinearGradient colors={['#FF0000', '#ef1010']} style={[NeomorphStyles.cartitemBtn]}>
    //           <Text style={{ color: 'white', fontFamily: 'Poppins-Regular' }}>Remove</Text>
    //         </LinearGradient>
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={() => props.navigation.navigate('Orders')}>
    //         <LinearGradient colors={[AppColors.lightGradient, AppColors.darkGradient]} style={[NeomorphStyles.cartitemBtn]}>
    //           <Text style={{ color: 'white', fontFamily: 'Poppins-Regular' }}>Order</Text>
    //         </LinearGradient>
    //       </TouchableOpacity>
    //     </View>
    //   </Neomorph>
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 20,
//     // fontWeight: 'bold',
//     marginBottom: 10,
//     marginTop: 10,

//   },
//   cartItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: 'gray',
//     paddingVertical: 10,
//     marginBottom: 10,
//   },
// });

export default OngoingOrders