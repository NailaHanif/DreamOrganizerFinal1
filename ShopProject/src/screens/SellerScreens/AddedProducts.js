import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
import ContainerStyles from '../../assets/styles/ContainerStyles';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';

const Addedproduct = (props) => {
  const route = useRoute();
  const { productName, productDescription, productPrice, imageData } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      <BackButtonHeader props={props} title='Products' />

      <ScrollView >
        <View style={[ContainerStyles.fullScreenCenteredContainer]} >
          <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetail', {
            productName,
            productDescription,
            productPrice,
            imageData,
          })}>
            <View style={[ContainerStyles.centeredContainer]}>
              <Neomorph style={Styles.squareBoxproductContainer}>
                <View >
                  <Text style={{ color: 'grey', fontFamily: "Poppins-Regular" }}>Name: {productName}</Text>
                  <Text style={{ color: 'grey', fontFamily: "Poppins-Regular" }}>Description: {productDescription.slice(0, 5)}... more</Text>
                  <Text style={{ color: 'grey', fontFamily: "Poppins-Regular" }}>Price: {productPrice}</Text>
                </View>
                <View>
                  <Image source={{ uri: imageData }} style={{ width: wp('25'), height: wp('25'), borderRadius: 20, marginHorizontal: wp('16'), justifyContent: "flex-end" }} />
                </View>
              </Neomorph>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetail')}>
            <View style={[ContainerStyles.centeredContainer]}>
              <Neomorph style={Styles.squareBoxproductContainer}>
                <View >
                  <Text style={{ color: 'grey', fontFamily: "Poppins-Regular" }}>Name: {productName}</Text>
                  <Text style={{ color: 'grey', fontFamily: "Poppins-Regular" }}>Description: {productDescription}... more</Text>
                  <Text style={{ color: 'grey', fontFamily: "Poppins-Regular" }}>Price: {productPrice}</Text>
                </View>
                <View>
                  <Image source={{ uri: imageData }} style={{ width: wp('25'), height: wp('25'), borderRadius: 20, marginHorizontal: wp('16'), justifyContent: "flex-end" }} />
                </View>
              </Neomorph>
            </View>
          </TouchableOpacity> */}
          {/* <Audio src={require('../../assets/audios/delete,total amount.mp3')} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>


  );
};

export default Addedproduct;
const Styles = StyleSheet.create({
  squareBoxproductContainer: {
    borderRadius: 25,
    width: wp('92%'),
    height: wp('30%'),
    shadowRadius: 25,
    backgroundColor: AppColors.backgroundSeller,
    padding: 10,
    marginTop: wp('3%'),
    marginBottom: wp('3%'),
    flexDirection: 'row',
    marginHorizontal: wp('5')
  }
})
