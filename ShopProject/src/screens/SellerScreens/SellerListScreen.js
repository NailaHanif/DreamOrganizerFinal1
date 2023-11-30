import React from 'react';
import { View, Text, FlatList, ScrollView, SafeAreaView } from 'react-native';
import ContainerStyles from '../../assets/styles/ContainerStyles';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import SellerListCard from '../../components/SellerCards/SellerListCard';
const vendors = [
  { id: '1', name: 'Vendor ', },
  { id: '2', name: 'slaman', },
  { id: '3', name: 'jhon doe', },
  { id: '4', name: 'abdullah', },
  { id: '5', name: 'jorge', },
  { id: '6', name: 'ahmad', },
  // Add more vendors here
];

const SellerListScreen = props => {
  return (
    <SafeAreaView style={[ContainerStyles.fullsecren]}>
      <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
        <BackButtonHeader title={'Vendor List'} props={props} />
        <Text style={{ fontSize: 24, marginTop: 16 }}>Vendor List</Text>
        <FlatList
          data={vendors}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SellerListCard item={item} props={props} />
          )}
        />
      </View>
    </SafeAreaView>

  );
};

export default SellerListScreen;
