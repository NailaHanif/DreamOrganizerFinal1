import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
import ContainerStyle from '../assets/styles/ContainerStyle';
import TextFieldStyle from '../assets/styles/TextFieldStyle';
import TextStyle from "../assets/styles/TextStyle";
import NeomorphStyle from '../assets/styles/NeomorphStyle';
import IconStyle from '../assets/styles/IconStyle';
import AppContext from '../context/AppContext';
import AppColors from '../assets/colors/AppColors';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OtherStyles from '../assets/styles/OtherStyles';
// import customMapStyle from '../assets/styles/mapStyle.json'
// import ScreenHeader from './ScreenHeader';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Map = ({ props, getAddress, userAddress }) => {
  // const { user,baseUrl,apiKey,storeProviderAddress,providerAddress, customerAddress,storeCustomerAddress,}=useContext(AppContext)
  const { user, baseUrl, apiKey } = useContext(AppContext)
  const [currentLocation, setCurrentLocation] = useState(null);
  const [newRegion, setNewRegion] = useState(null)
  const [address, setAddress] = useState('')
  const [searchValue, setSearchValue] = useState('');

  const fetchAddressFromCoordinates = (latitude, longitude) => {
    Geocoder.init(apiKey, { language: "en" });
    Geocoder.from(latitude, longitude)
      .then((response) => {
        console.log('///////response of Address///////');
        console.log(response)
        console.log(response.results[0].formatted_address)
        console.log(typeof response.results[0].formatted_address)
        console.log(typeof response.results[0].address_components)
        console.log(response.results[0].address_components[3].long_name)

        console.log(((response.results[0].formatted_address.split(',')).slice(1)).toString())
        setAddress(((response.results[0].formatted_address.split(',')).slice(1)).toString())
      })
      .catch((error) => {
        console.log('/////error///////')
        console.warn(error)
      }
      );
  }

  const fetchCoordinatesFromAddress = (pointedAddress) => {
    Geocoder.init(apiKey, { language: "en" });
    Geocoder.from(pointedAddress)
      .then((response) => {
        console.log('///////response of Coordinates///////');
        console.log(response)
        console.log(response.results[0].geometry.location)
        setNewRegion({
          latitude: response.results[0].geometry.location.lat,
          longitude: response.results[0].geometry.location.lng,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        })
      })
      .catch((error) => {
        console.log('/////error///////')
        console.warn(error)
      }
      );
  }


  useEffect(() => {
    if (userAddress == "Address") {
      Geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        // setCurrentLocation({latitude:latitude,longitude:longitude});
        console.log('////////////////Current position/////////////')
        console.log(position);
        console.log(latitude + '///////////' + longitude);
        fetchAddressFromCoordinates(latitude, longitude);
      });
    }
    else {
      setAddress(userAddress)
      fetchCoordinatesFromAddress(userAddress)
    }

  }, []);
  return (
    <View style={[ContainerStyle.mapModalContainer]}>
      <View
        style={[{ height: hp("60%"), borderTopLeftRadius: wp("8%"), borderTopRightRadius: wp('8%'), overflow: 'hidden' }]}
      >
        <MapView
          provider={PROVIDER_GOOGLE}
          // showsUserLocation={true}
          // showsMyLocationButton={true}
          // showsBuildings={true}
          // showsTraffic={true}
          zoomEnabled={true}
          zoomTapEnabled={true}
          zoomControlEnabled={false}
          scrollEnabled={true}
          rotateEnabled={true}
          loadingEnabled={true}
          loadingIndicatorColor={AppColors.primary}
          loadingBackgroundColor={AppColors.secondary}
          style={{ ...StyleSheet.absoluteFillObject }}
          // customMapStyle={customMapStyle}
          // onRegionChange={region => {
          //   console.log(region);
          // }}

          region={newRegion ? newRegion : {
            latitude: currentLocation ? currentLocation.latitude : 0,
            longitude: currentLocation ? currentLocation.longitude : 0,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={currentLocation ?
              {
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              } : newRegion ? {
                latitude: newRegion.latitude,
                longitude: newRegion.longitude,
              } : {
                latitude: 0,
                longitude: 0,
              }}
            title={address}
            description="Your Location is!"
            draggable={true}
            onDragEnd={(event) => {
              console.log('????????????????????')
              console.log(event.nativeEvent)
              console.log(event.nativeEvent.coordinate)
              setNewRegion({
                latitude: event.nativeEvent.coordinate.latitude,
                longitude: event.nativeEvent.coordinate.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              })
              fetchAddressFromCoordinates(event.nativeEvent.coordinate.latitude, event.nativeEvent.coordinate.longitude)
            }}

          />

        </MapView>
      </View>
      <View style={[ContainerStyle.alignCenterContainer]}>
        {/* <Neomorph
    
    lightShadowColor={AppColors.lightShadow}
    darkShadowColor={AppColors.darkShadow}
    style={[NeomorphStyle.NeomorphTextField]}>
    <View style={[ContainerStyle.textFieldWithIconContainer]}>
      <FontAwesome5
        name="house-user"
        size={wp('5.5%')}
        color={AppColors.primary}
        style={[IconStyle.textFieldLeftIcon]}
      />
      <TextInput
        placeholder="Enter house address"
        placeholderTextColor={AppColors.mediumGray}
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid={AppColors.transparent}
        cursorColor={AppColors.mediumGray}
        style={[TextFieldStyle.textFieldWithLeftIcon]}
       
        onChangeText={text => {
         
        }}
      />
    </View>
  </Neomorph> */}
        <Neomorph
          lightShadowColor={AppColors.lightShadow}
          darkShadowColor={AppColors.darkShadow}
          style={[NeomorphStyle.NeomorphMultilineTextField]}
        >
          <View style={[ContainerStyle.textFieldWithIconContainer, ContainerStyle.spaceBetweenContainer, ContainerStyle.alignCenterContainer]}>
            <Text style={[TextStyle.blackText1, OtherStyles.mh4, { width: wp('60%') }]}>{address}</Text>

            <TouchableOpacity
              onPress={() => {
                getAddress(address)

              }}
            >
              <Neomorph
                // inner
                lightShadowColor={AppColors.lightShadow}
                darkShadowColor={AppColors.darkShadow}
                style={[NeomorphStyle.NeomorphMenuIcon, OtherStyles.mr5]}
              >
                <FontAwesome
                  name='location-arrow'
                  size={wp('7%')}
                  color={AppColors.primary}
                />
              </Neomorph>
            </TouchableOpacity>
          </View>
        </Neomorph>
      </View>

      {/* <View style={[{position:'absolute',top:hp('32%'),left:wp('4%')}]}>
<GooglePlacesAutocomplete
   placeholder='Search'
   fetchDetails={true}
   numberOfLines={2}
   autoFillOnNotFound={false}
   listViewDisplayed={true}
   keepResultsAfterBlur={true}
   keyboardShouldPersistTaps='always'
   returnKeyType={'default'}

   styles={{
    container:{height:hp('7%'),width:wp('84%'),borderRadius:wp('2%')},
    textInputContainer:{height:hp('7%'),width:wp('84%'),borderRadius:wp('2%')},
    textInput:{height:hp('7%'),width:wp('84%'),backgroundColor:AppColors.appBackground,color:AppColors.black},
    // listView:{backgroundColor:'red' },
  }}

   query={{
    key: 'AIzaSyB1BMfNjd-6DlS7RUWSzfokIF0XeSMzHzY',
    language: 'en',
  }}
  onPress={(data, details = null)=>{
    console.log(details)
    console.log('pressed')
  }}
  
  
   />
     </View> */}




    </View>

  );
};

export default Map;
