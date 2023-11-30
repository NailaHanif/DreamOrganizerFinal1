import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
import BackButtonHeader from '../components/headers/BackButtonHeader';
import LabelStyles from '../assets/styles/LabelStyles';
import TextFieldStyles from '../assets/styles/TextFieldStyles';
import LinearGradient from 'react-native-linear-gradient';
import ButtonStyles from '../assets/styles/ButtonStyles';
import ContainerStyles from '../assets/styles/ContainerStyles';
import AppColors from '../assets/colors/AppColors';
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Alert } from 'react-native';
const SingleProductDetail = props => {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [guest, setGuest] = useState('');
  const [eventDate, setEventDate] = useState('');
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      // Format and set the event date
      if (Platform.OS === 'android') {
        toggleDatePicker();
        setEventDate(formatDate(currentDate));
      }
    } else {
      toggleDatePicker();
    }
  };
  const formatDate = rawDate => {
    let date = new Date(`${rawDate}`);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${day}-${month}-${year}`;
  };
  const handleBook=()=>{
    Alert.alert(`${date}`)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView><View >
        <BackButtonHeader props={props} title="Detail" />
        <Neomorph style={[ContainerStyles.centeredContainer, ContainerStyles.squareBoxHalfScreenContainer2]}>
          <Image
            style={[ContainerStyles.squareBoxHalfScreenContainer2, { marginTop: -10 }]}
            source={require('../assets/images/dec3.jpg')}
          />
        </Neomorph>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
            <Text style={[LabelStyles.headingSmDark]}> Wedding</Text>
            <Text style={[LabelStyles.headingSmDark]}> $ 1500</Text>

          </View>

          <Text style={[LabelStyles.lightText]}>
            Wedding is a celebration held in honor of a bride-to-be before her
            wedding day.
          </Text>
        </View>
        {showPicker && (
          <DateTimePicker
            mode="date"
            display='calendar'
            value={date}
            onChange={onChange}

          />
        )}
        <Pressable onPress={toggleDatePicker}>
          <View style={{flexDirection:'row'}}>
          <TextInput
            editable={false}
            placeholderTextColor={'black'}
            placeholder="Date"
            style={[TextFieldStyles.forgetPasswordNeomorph]}
            value={eventDate}
            keyboardType='number-pad'
            onChangeText={setEventDate}
          />
          <EvilIcons name='calendar' size={30} color={AppColors.primary} style={{marginHorizontal:wp('-10%'),marginVertical:hp('4%')}}/>
 
          </View>
                 </Pressable>
        <TextInput
          placeholderTextColor={'black'}
          placeholder=" Guests"
          keyboardType='number-pad'
          onChangeText={setGuest}
          style={[TextFieldStyles.forgetPasswordNeomorph, { margin: 10 }]}
        />
        <TouchableOpacity onPress={handleBook} >
          <LinearGradient
            colors={[AppColors.lightGradient, AppColors.darkGradient]}
            style={[ButtonStyles.forgetPasswordbtn]}>
            <Text style={[LabelStyles.lightText, { color: 'white' }]}>Book Event</Text>
          </LinearGradient></TouchableOpacity>
      </View></ScrollView>
    </SafeAreaView>

  );
};

export default SingleProductDetail;
