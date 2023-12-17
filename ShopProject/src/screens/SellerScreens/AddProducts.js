import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContainerStyles from '../../assets/styles/ContainerStyles';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ButtonStyles from '../../assets/styles/ButtonStyles';
import LinearGradient from 'react-native-linear-gradient';
import ImageStyles from '../../assets/styles/ImageStyles';

const Addproducts = (props) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [imageData, setImageData] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const openImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.error) {
        setImageData(response.assets[0].uri);
      }
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const category = props.route.params.category;

      const formData = new FormData();
      formData.append('Event_category', category);
      formData.append('Event_title', productName);
      formData.append('Event_description', productDescription);
      formData.append('Event_price', productPrice);
      formData.append('Event_image', {
        uri: imageData,
        type: 'image/jpeg',
        name: 'productImage.jpg',
      });

      const response = await axios.post('http://192.168.1.5:8888/addProduct', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.save) {
        await AsyncStorage.setItem('events', JSON.stringify(response.data.newEvent));
        navigation.navigate('AddedProduct');
      } else {
        Alert.alert('Error', 'Failed to add product. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to add product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      <BackButtonHeader props={props} title="Add Product" />

      <ScrollView>
        <View>
          <View style={[ContainerStyles.centeredContainer, { backgroundColor: '#DDDDDD' }]}>
            <TouchableOpacity onPress={openImagePicker}>
              <Neomorph style={[ContainerStyles.centeredContainer, ContainerStyles.squareBoxHalfScreenContainer1]}>
                {imageData === '' ? (
                  <Ionicons name="camera-outline" size={34} color="grey" />
                ) : (
                  <Image source={{ uri: imageData }} style={[ImageStyles.addProductImg]} />
                )}
              </Neomorph>
            </TouchableOpacity>

            <Neomorph style={[Styles.Neomorphstyle]}>
              <TextInput
                placeholderTextColor="black"
                placeholder="Product Name"
                value={productName}
                onChangeText={setProductName}
                style={[Styles.textinputstyle]}
              />
            </Neomorph>
            <Neomorph style={[Styles.Neomorphstyle]}>
              <TextInput
                placeholderTextColor="black"
                placeholder="Product Description"
                value={productDescription}
                onChangeText={setProductDescription}
                style={[Styles.textinputstyle]}
              />
            </Neomorph>
            <Neomorph style={[Styles.Neomorphstyle]}>
              <TextInput
                placeholderTextColor="black"
                placeholder="Product Price in $"
                keyboardType="number-pad"
                value={productPrice}
                onChangeText={setProductPrice}
                style={[Styles.textinputstyle]}
              />
            </Neomorph>
            <TouchableOpacity
              onPress={() => {
                if (productName.length !== 0 && productDescription.length !== 0 && productPrice.length !== 0) {
                  handleSubmit();
                } else {
                  Alert.alert('Fill data carefully input field must not be empty');
                }
              }}
            >
              <LinearGradient colors={['#08d4c4', '#01ab9d']} style={[ButtonStyles.forgetPasswordbtn]}>
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={{ textAlign: 'center', color: 'white' }}>Add a product</Text>
                )}
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Addproducts;

const Styles = StyleSheet.create({
  Neomorphstyle: {
    shadowRadius: 10,
    borderRadius: 25,
    backgroundColor: '#DDDDDD',
    width: wp('88'),
    height: hp('9'),
    marginTop: wp('5'),
  },
  textinputstyle: {
    fontFamily: 'Poppins-Regular',
    margin: wp('2'),
  },
});
