import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import ImageStyles from '../../assets/styles/ImageStyles'
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
import ContainerStyles from '../../assets/styles/ContainerStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const SellerListCard = ({ item, props }) => {
  return (
    <Neomorph style={Styles.NeomorphListItemCard}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SellerProfile', { vendor: item })}
        style={{ padding: 16 }}>
        <Text style={{ fontSize: 18 }}>{item.name}</Text>
        <Image source={require('../../assets/images/nikah.jpg')} style={[ImageStyles.circleImage]}
        />
        {/* <Text style={{ fontSize: 18 }}>{item.services}</Text> */}
      </TouchableOpacity>
    </Neomorph>
  )
}
export default SellerListCard;
const Styles = StyleSheet.create({
  NeomorphListItemCard: {

    shadowRadius: 10,
    borderRadius: 25,
    backgroundColor: '#DDDDDD',
    width: wp('45'),
    height: hp('18'),
    // marginTop: wp('3'),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: 'center',
    margin: wp('2')
  }
})