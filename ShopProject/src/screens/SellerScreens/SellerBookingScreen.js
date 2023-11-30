import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';

const services = [
  'Service A',
  'Service B',
  'Service C',
  // Add more services here
];

const SellerBookingScreen = ({ route }) => {
  const { vendor } = route.params;
  const [selectedService, setSelectedService] = useState(services[0]);
  const [eventDetails, setEventDetails] = useState('');
  const [quoteRequested, setQuoteRequested] = useState(false);

  const handleBookingSubmit = () => {
    // Implement booking submission logic
    setQuoteRequested(true);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24 }}>Book {vendor.name}'s Service</Text>
      
      {/* Service Picker */}
      <Text style={{ fontSize: 18, marginTop: 16 }}>Select Service:</Text>
      <Picker
        selectedValue={selectedService}
        onValueChange={(itemValue) => setSelectedService(itemValue)}
        style={{ borderWidth: 1, borderColor: '#ccc' }}
      >
        {services.map((service, index) => (
          <Picker.Item key={index} label={service} value={service} />
        ))}
      </Picker>

      {/* Event Details */}
      <Text style={{ fontSize: 18, marginTop: 16 }}>Event Details:</Text>
      <TextInput
        placeholder="Enter event details"
        value={eventDetails}
        onChangeText={text => setEventDetails(text)}
        multiline
        style={{ marginTop: 8, padding: 8, borderWidth: 1, borderColor: '#ccc', height: 100 }}
      />

      {/* Submit Button */}
      <Button title="Request Quote" onPress={handleBookingSubmit} />

      {/* Quote Result */}
      {quoteRequested && (
        <Text style={{ fontSize: 18, marginTop: 16 }}>
          Quote requested for {selectedService} service. Vendor will respond soon.
        </Text>
      )}
    </View>
  );
};

export default SellerBookingScreen;
