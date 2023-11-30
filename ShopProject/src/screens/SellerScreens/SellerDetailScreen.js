import React from 'react';
import { View, Text, Button } from 'react-native';
import NeomorphStyles from '../../assets/styles/NeomorphStyles';
import BackButtonHeader from '../../components/headers/BackButtonHeader';

const SellerDetailScreen = props => {
  const { vendor } = props.route.params;

  const handleBookPress = () => {
    // Implement booking logic here
  };

  return (
    <View>
      <BackButtonHeader props={props} title={'vendor Detail'} />
      <Text>Vendor Details</Text>
      <Text>Name: {vendor.name}</Text>
      <Button title="Book"  style={[NeomorphStyles.neomorph_TextInput]} onPress={handleBookPress} />
    </View>
  );
};

export default SellerDetailScreen;
