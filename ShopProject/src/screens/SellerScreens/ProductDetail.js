import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

import BackButtonHeader from '../../components/headers/BackButtonHeader'
import ImageStyles from '../../assets/styles/ImageStyles';
import LabelStyles from '../../assets/styles/LabelStyles';
import ButtonStyles from '../../assets/styles/ButtonStyles';
import LinearGradient from 'react-native-linear-gradient';
const ProductDetail = (props) => {
    const route = useRoute();
    const { productName, productDescription, productPrice, imageData } = route.params;

    return (
        <View>
            <BackButtonHeader title={'Product Detail'} props={props} />
            <Image source={{ uri: imageData }} style={[ImageStyles.SingleProductBackGroundImage]}
            />
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                    <Text style={[LabelStyles.headingSmDark]}> {productName}</Text>
                    <Text style={[LabelStyles.headingSmDark]}> ${productPrice}</Text>

                </View>

                <Text style={[LabelStyles.lightText]}>
                    Wedding is a celebration held in honor of a bride-to-be before her
                    wedding day.
                </Text>
                {/* <TouchableOpacity onPress={()=>{props.navigation.navigate('Orders')}}>
                <LinearGradient colors={['#08d4c4', '#01ab9d']} style={[ButtonStyles.forgetPasswordbtn]}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Orders</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Orders')}}>
                <LinearGradient colors={['#08d4c4', '#01ab9d']} style={[ButtonStyles.forgetPasswordbtn]}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Cancel Order</Text>
              </LinearGradient>
            </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default ProductDetail