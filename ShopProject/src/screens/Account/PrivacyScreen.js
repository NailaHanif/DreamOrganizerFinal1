import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Neomorph from 'react-native-neomorph-shadows-fixes';

const PrivacyScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Settings</Text>
      <Neomorph
        inner
        style={styles.buttonContainer}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enable Two-Factor Authentication</Text>
        </TouchableOpacity>
      </Neomorph>
      <Neomorph
        inner
        style={styles.buttonContainer}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manage App Permissions</Text>
        </TouchableOpacity>
      </Neomorph>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default PrivacyScreen;
