import React ,{useState}from 'react'
import { View, Text,TextInput } from 'react-native'
import { Neomorph } from 'react-native-neomorph-shadows-fixes'
import ContainerStyles from '../assets/styles/ContainerStyles'
import AntDesign from'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextFieldStyles from '../assets/styles/TextFieldStyles';
const Searchbar = () => {
  const[searchQuery,setSearchQuery]=useState("")
  return (
    <View style={[ContainerStyles.centeredContainer,ContainerStyles.rowContainer]}>
        <Neomorph
      inner // <-- This makes the child view appear inside the Neomorph
      swapShadows // <-- This changes the shadow color based on the theme
      style={[TextFieldStyles.searchbarfield]}
    >
      <AntDesign name="search1" size={20} color="rgba(0,0,0,0.4)" style={{padding:8}} />
      <TextInput
        style={{fontSize:18,}}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={text =>setSearchQuery(text)}
      />
    </Neomorph>
        </View>
  )
}

export default Searchbar