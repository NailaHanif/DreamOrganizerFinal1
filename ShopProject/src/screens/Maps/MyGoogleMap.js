// import React, {useContext, useEffect, useState} from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   TouchableOpacity,
//   SnapshotViewIOS,
//   View,
//   ImageBackground,
//   Text,
//   ActivityIndicator,
// } from 'react-native';
// import ContainerStyles from '../../assets/styles/ContainerStyles';
// import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import database from '@react-native-firebase/database';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Lottie from 'lottie-react-native';

// const MyGoogleMap = props => {
//   const [mapShops, setMapShops] = useState([1, 2, 3, 4, 5]);
//   const [addingItemIntoCartLoading, setAddingItemIntoCartLoading] =
//     useState(false);

//   return (
//     <View style={styles.container}>
//      <MapView
//        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//        style={styles.map}
//        region={{
//          latitude: 37.78825,
//          longitude: -122.4324,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }}
//      >
//      </MapView>
//    </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: 400,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default MyGoogleMap;
import { View, Text } from 'react-native'
import React from 'react'

const MyGoogleMap = () => {
  return (
    <View>
      <Text>MyGoogleMap</Text>
    </View>
  )
}

export default MyGoogleMap