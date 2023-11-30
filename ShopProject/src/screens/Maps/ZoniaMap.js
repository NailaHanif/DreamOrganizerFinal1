import React, { useState, useContext, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Geolocation from 'react-native-geolocation-service';
import AppColors from '../../assets/colors/AppColors';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Shadow, Neomorph, } from 'react-native-neomorph-shadows';

import CartScreenHeader from '../../components/headers/CartScreenHeader';

// useEffect(()=>{
//   requestLocationPermission();
// },[])
// const  requestLocationPermission= async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Cool Photo App Camera Permission',
//         message:
//           'Cool Photo App needs access to your camera ' +
//           'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('You can use the location');
//     } else {
//       console.log('Location permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

const ZoniaMap = (props, { route }) => {

    ///States
    const { setPreviousAddress } = route.params;
    const [mLat, setMLat] = useState(0);
    const [mLong, setMLong] = useState(0);
    const [address, setAddress] = useState('');
    const [currentLocation, setCurrentLocation] = useState(null);
    const [newRegion, setNewRegion] = useState(null)
    ///function

    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(position);
                setMLat(position.coords.latitude);
                setMLong(position.coords.longitude);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, [])
    useEffect(() => {
        // Fetch and display address based on mLat and mLong
        fetchAddress();
    }, [mLat, mLong]);

    const fetchAddress = async () => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${mLat},${mLong}&key=AIzaSyB1BMfNjd-6DlS7RUWSzfokIF0XeSMzHzY`
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setAddress(data.results[0].formatted_address);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleMapPress = event => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setMLat(latitude);
        setMLong(longitude);
    }
    const getLocation = (() => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(position);
                setMLat(position.coords.latitude);
                setMLong(position.coords.longitude);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    })


    return (<SafeAreaView>
        <CartScreenHeader props={props} title="  Google Map" />
        <View style={styles.container}>
            <MapView
                style={{ ...StyleSheet.absoluteFillObject }}
                provider={PROVIDER_GOOGLE}
                // style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsBuildings={true}
                showsTraffic={true}
                zoomEnabled={true}
                zoomTapEnabled={true}
                zoomControlEnabled={false}
                scrollEnabled={true}
                rotateEnabled={true}
                loadingEnabled={true}


                //  initialRegion={{
                //     latitude:32.1877 ,
                //     longitude: 74.1945 ,
                //     latitudeDelta: 0.015,
                //     longitudeDelta: 0.0121,
                //   }}
                region={newRegion ? newRegion : {
                    latitude: currentLocation ? currentLocation.latitude : 0,
                    longitude: currentLocation ? currentLocation.longitude : 0,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                onRegionChange={x => {
                    console.log(x)
                }}
                onPress={handleMapPress}
            >
                <Marker
                    // coordinate={{latitude:mLat,longitude:mLong}}
                    //  pinColor={AppColors.secondary}
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
                    description="Your Location is!"
                    draggable={true}


                />
            </MapView>

        </View>
        <Shadow


            style={{
                //     shadowOffset: {width: 10, height: 10},
                shadowOpacity: 1,
                shadowColor: "grey",
                shadowRadius: 5,
                borderRadius: 10,
                backgroundColor: AppColors.AppWhite,
                marginTop: wp("103%"),
                width: wp('100%'),
                height: hp('44.5%'),
                // ...include most of View/Layout styles
            }}
        >
            <Text style={{ marginTop: wp('4'), marginLeft: wp("10"), fontSize: wp('5'), fontFamily: "Poppins-Regular", color: "black" }}>Add New Address</Text>
            <Neomorph
                inner  // <- enable shadow inside of neomorph
                style={{
                    marginTop: wp('5'), marginLeft: wp('5'), shadowRadius: 3,
                    borderRadius: wp("1.5%"),
                    backgroundColor: AppColors.AppWhite,
                    // shadowOpacity:0.2,
                    width: wp('80%'),
                    height: hp('7%'),
                    // alignItems:'center',
                    justifyContent: 'center',
                    marginTop: hp('2%')
                }}
            >
                <View  >
                    <Text style={{ marginLeft: wp('5%'), color: "black" }}>Home</Text>
                    <View>
                        {/* <EmailIcon width={30} height={30} colors={['rgba(32,1,34,1)', 'rgba(111,0,0,1)']} style={{alignSelf:'center'}} /> svg email */}

                    </View>

                </View>

            </Neomorph>
            <Neomorph
                inner  // <- enable shadow inside of neomorph
                style={{
                    marginTop: wp('5'), marginLeft: wp('5'), shadowRadius: 3,
                    borderRadius: wp("1.5%"),
                    backgroundColor: AppColors.AppWhite,
                    // shadowOpacity:0.2,
                    width: wp('80%'),
                    height: hp('15%'),
                    // alignItems:'center',
                    // justifyContent:'flex-start',
                    marginTop: hp('2%')
                }}
            >
                <View  >
                    <TouchableOpacity onPress={() => {
                        // getLocation();
                        // setCurrentLocation()
                    }}>
                        <Text style={{ marginLeft: wp('5%'), marginTop: wp('5%'), color: "black" }}>{address}</Text>
                    </TouchableOpacity>
                    <View>

                    </View>

                </View>

            </Neomorph>
            <TouchableOpacity onPress={() => {

                props.navigation.navigate('SignUp', { setPreviousAddress: address });
            }}>
                <View style={{ width: wp('40'), height: wp('14'), justifyContent: 'center', borderColor: 'white', marginLeft: wp('30%'), marginTop: wp('5%'), backgroundColor: AppColors.brownColor, borderCurve: 'circular', borderWidth: 2, borderRadius: 18 }}>
                    <Text style={{ textAlign: 'center', color: AppColors.AppWhite, fontSize: wp('4.5') }}>Save</Text>
                </View>
            </TouchableOpacity>
        </Shadow>

    </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        marginTop: 50,
        height: hp('50%'),
        width: wp('100%'),
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default ZoniaMap;
