import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Neomorph from 'react-native-neomorph-shadows-fixes';

const NeomorphicTextInputStyles = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      {/* Neomorphic TextInput 1 */}
      <Neomorph
        style={styles.textInputContainer}
        inner
        darkShadowColor="#9A9A9A"
        lightShadowColor="#FFFFFF"
      >
        <TextInput
          style={styles.textInput}
          placeholder="Style 1"
          value={inputValue}
          onChangeText={setInputValue}
        />
      </Neomorph>

      {/* Neomorphic TextInput 2 */}
      <Neomorph
        style={styles.textInputContainer}
        inner
        darkShadowColor="#9A9A9A"
        lightShadowColor="#FFFFFF"
      >
        <TextInput
          style={styles.textInput}
          placeholder="Style 2"
          value={inputValue}
          onChangeText={setInputValue}
        />
      </Neomorph>

      {/* ... Repeat for Styles 3 to 10 ... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    width: '100%',
  },
});

export default NeomorphicTextInputStyles;
