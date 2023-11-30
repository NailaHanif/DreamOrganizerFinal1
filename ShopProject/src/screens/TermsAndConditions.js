// src/screens/TermsAndConditionsScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import BackButtonHeader from '../components/headers/BackButtonHeader';

const TermsAndConditions = (props) => {
  return (
    <ScrollView >
      <BackButtonHeader props={props} title={'Terms And Conditions'}/>

      <View style={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum, tortor vel ultrices faucibus, justo
        ex aliquam tellus, id dictum est mauris nec ex. Donec bibendum, ligula eu tempus dictum, justo libero commodo
        ante, a venenatis tortor urna id odio. Fusce eu dui a purus sollicitudin scelerisque. Morbi cursus libero nec
        elit efficitur, nec posuere purus venenatis. Donec vulputate id enim a tristique.
        {/* ... More terms and conditions content */}
      </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#009387', // Heading color
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify', // Justify text
  },
});

export default TermsAndConditions;
