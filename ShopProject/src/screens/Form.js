import React, { useState } from 'react';
import { View, Alert, TextInput, Button, Image, StyleSheet, Platform, Text, TouchableOpacity, Pressable, SafeAreaView, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextFieldStyles from '../assets/styles/TextFieldStyles';
import ButtonStyles from '../assets/styles/ButtonStyles';
import ContainerStyles from '../assets/styles/ContainerStyles';
import LabelStyles from '../assets/styles/LabelStyles';
import AppColors from '../assets/colors/AppColors';
import LinearGradient from 'react-native-linear-gradient';
import BackButtonHeader from '../components/headers/BackButtonHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
const Form = (props) => {
  //States
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [eventDate, setEventDate] = useState('')
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  //Functions.......
  const toggleDatePicker = () => {
    setShowPicker(!showPicker)
  }
  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentData = selectedDate;
      setDate(currentData);
      if (Platform.OS == 'android') {
        toggleDatePicker();
        setEventDate(formatDate(currentData))
      }
    } else {
      toggleDatePicker()
    }
  }
  const formatDate = (rawDate) => {
    let date = new Date(`${rawDate}`);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${day}-${month}-${year}`
  }
  const onSubmit = () => {
    const alertMessage = `Event Name: ${eventName}\nDescription: ${description}\nAddress: ${address}\nPrice: ${price}\nEvent Date: ${eventDate}`;
    Alert.alert('Form Data', alertMessage);
  };
 return (
      <ScrollView showsVerticalScrollIndicator={false} >
      <BackButtonHeader title={"Form"} props={props} />
      <View style={styles.container}>
      <Text style={[LabelStyles.headingMdDark]}>
        Let us know about your choice
      </Text>
      <Neomorph style={styles.neomorph}>
      <TextInput placeholderTextColor='black' placeholder='Event Name' style={styles.textInput} value={eventName} onChangeText={setEventName} />
      </Neomorph>
      <Neomorph style={styles.neomorph}>
      <TextInput placeholderTextColor='black' placeholder='Description' style={styles.textInput} value={description} onChangeText={setDescription} />
      </Neomorph>
      <Neomorph style={styles.neomorph}>
      <TextInput placeholderTextColor='black' placeholder='Address' style={styles.textInput} value={address} onChangeText={setAddress} />
      </Neomorph>
      <Neomorph style={styles.neomorph}>
      <TextInput placeholderTextColor='black' placeholder='PriceRange' style={styles.textInput} value={price} onChangeText={setPrice} />
      </Neomorph>
      <Neomorph style={styles.neomorph}>
      <TextInput editable={false} placeholderTextColor='black' placeholder='Date' style={styles.textInput} value={eventDate} onChangeText={setEventDate} />
      </Neomorph>
      <TouchableOpacity onPress={onSubmit} >
      <LinearGradient style={[ButtonStyles.neomorphButtons]} colors={['#08d4c4', '#01ab9d']}>
      <Text style={{ color: 'white' }}> Submit</Text>
      </LinearGradient>
      </TouchableOpacity>
      </View>
      </ScrollView>
  );
};
export default Form;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:AppColors.background
  },
  textInput: {
    width:wp('85%') ,
    height: hp('8%'),
    marginTop: 10,
    paddingHorizontal: 10,
  },
  neomorph:{
    shadowRadius: 10,
    borderRadius: 20,
    backgroundColor: '#DDDDDD',
    width: wp('90%'),
    height: hp('9%'),
    alignItems: 'center',
    margin:10
  }
});
