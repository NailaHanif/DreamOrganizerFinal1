import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SecurityScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Code to handle logout
    navigation.navigate('Login'); // Replace 'Login' with your login screen name
  };

  // const handleChangePassword = () => {
  //   // Code to navigate to change password screen
  //   navigation.navigate('forgetPassword'); // Replace 'ChangePassword' with your change password screen name
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Security</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
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
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SecurityScreen;
