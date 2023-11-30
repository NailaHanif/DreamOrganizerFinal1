import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import BackButtonHeader from '../components/headers/BackButtonHeader';
import LabelStyles from '../assets/styles/LabelStyles';
import ButtonStyles from '../assets/styles/ButtonStyles';
import LinearGradient from 'react-native-linear-gradient';

const CheckOut = props => {
  return (
    <View>
      <BackButtonHeader props={props} title="payment" />
      <Text style={[LabelStyles.headingMdDark]}> Choose a payement method</Text>
      <LinearGradient colors={['blue', 'blue']} style={[ButtonStyles.paymentBtn]}>
        <TouchableOpacity>
          <Text style={{color: 'white'}}>Paypal</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient colors={['red', 'red']} style={[ButtonStyles.paymentBtn]}>
        <TouchableOpacity>
          <Text style={{color: 'white'}}>Jazz Cash</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
               colors={['#08d4c4', '#01ab9d']}
        style={[ButtonStyles.paymentBtn]}>
        <TouchableOpacity>
          <Text style={{color: 'white'}}>Payment</Text>
        </TouchableOpacity>
      </LinearGradient>
      <TouchableOpacity onPress={()=>props.navigation.navigate('CustomerDrawer')}>
          <Text style={{color: 'blue' ,alignSelf:'center',margin:10}}>want to go Home</Text>
        </TouchableOpacity>
    </View>
  );
};

export default CheckOut;
