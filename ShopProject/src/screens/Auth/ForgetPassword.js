import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import ContainerStyles from '../../assets/styles/ContainerStyles'
import { Neomorph } from 'react-native-neomorph-shadows-fixes'
import TextFieldStyles from '../../assets/styles/TextFieldStyles'
import ButtonStyles from '../../assets/styles/ButtonStyles';
import LinearGradient from 'react-native-linear-gradient'
const ForgetPassword = () => {
  return (
    <View style={[ContainerStyles.centeredContainer]}>
      <Text style={{fontFamily:'Poppins-black',marginTop:50}}> Enter Recovery email and set new password.</Text>
      <Neomorph style={[TextFieldStyles.forgetPasswordNeomorph]}>
        <TextInput placeholder='Email'  style={[TextFieldStyles.forgetPasswordtextInput]} /></Neomorph>
        <Neomorph style={[TextFieldStyles.forgetPasswordNeomorph]}>
        <TextInput placeholder='password' style={[TextFieldStyles.forgetPasswordtextInput]}/>
          </Neomorph> 
          <TouchableOpacity>
          <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={[ButtonStyles.forgetPasswordbtn]}
                >
                    <Text style={{color:'white'}} >Change Password</Text>
                </LinearGradient>
        </TouchableOpacity>  
    </View>
  )
}

export default ForgetPassword