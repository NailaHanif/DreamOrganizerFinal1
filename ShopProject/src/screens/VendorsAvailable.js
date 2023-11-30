import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Neomorph, Shadow } from 'react-native-neomorph-shadows-fixes'
import ContainerStyles from '../assets/styles/ContainerStyles';
import NeomorphStyles from '../assets/styles/NeomorphStyles';
import BackButtonHeader from '../components/headers/BackButtonHeader';
import LabelStyles from '../assets/styles/LabelStyles';
import LinearGradient from 'react-native-linear-gradient';
import ImageStyles from '../assets/styles/ImageStyles'
import AppColors from '../assets/colors/AppColors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const VendorsAvailable = (props) => {
  return (
    <SafeAreaView>
      <View style={[ContainerStyles.fullsecren, { backgroundColor: '#FFFFFF' }]} >
        <BackButtonHeader props={props} title={'Vendors'} />
        <TouchableOpacity OnPress={() => props.navigation.navigate('Subcategories')}>
          <Shadow style={[NeomorphStyles.cartCard, { flex: 1, flexDirection: 'row', justifyContent: 'space-between' }]}>
            <View>
              <Image source={require('../assets/images/marie.jpg')} style={{ width: wp('20'), height: hp('12'), borderRadius: 10, margin: 5 }} />
            </View>
            <View style={{ margin: 10 }}><Text style={[LabelStyles.lightText,]}>Marie</Text>
              <Text style={[LabelStyles.lightText,]}>Wedding</Text>
              <Text style={[LabelStyles.lightText,]}>Working since 2003</Text>
            </View>
          </Shadow>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

export default VendorsAvailable;