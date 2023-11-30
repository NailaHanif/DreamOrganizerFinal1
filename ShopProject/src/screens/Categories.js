import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import DrawerHeader from '../components/headers/DrawerHeader';
import ContainerStyles from '../assets/styles/ContainerStyles';
import ImageStyles from '../assets/styles/ImageStyles';
import NeomorphStyles from '../assets/styles/NeomorphStyles';
import Swiper from 'react-native-swiper';
import FontAwesom from 'react-native-vector-icons/FontAwesome'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import InnerCategoryCard from '../components/InnerCategoryCard';
import LabelStyles from '../assets/styles/LabelStyles';
import { Neomorph } from 'react-native-neomorph-shadows-fixes';
import AppColors from '../assets/colors/AppColors';
const Categories = props => {
  const category = [
    { id: 1, name: 'Wedding', image: require('../assets/images/rings-icon.png') },
    { id: 2, name: 'Birthday', image: require('../assets/images/cake_icon.png') },
    { id: 3, name: 'Parties', image: require('../assets/images/party.png') },
    {
      id: 4,
      name: 'Educational',
      image: require('../assets/images/graduation-icon.png'),
    },
    { id: 5, name: 'Islamic', image: require('../assets/images/mosque_icon.png') },
    { id: 6, name: 'Others', image: require('../assets/images/others.png') },
  ];
  const [birthday, setBirthday] = useState([
    {
      id: '1',
      name: 'Birthday',
      image: require('../assets/images/birthday/birth1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '2',
      name: 'Birthday',
      image: require('../assets/images/birthday/birth2.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },

    {
      id: '4',
      name: 'Birthday',
      image: require('../assets/images/birthday/birth3.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '5',
      name: 'Birthday',
      image: require('../assets/images/birthday/birth4.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '6',
      name: 'Birthday',
      image: require('../assets/images/birthday/birth5.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '7',
      name: 'Birthday',
      image: require('../assets/images/birthday/birth6.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '8',
      name: 'Birthday',
      image: require('../assets/images/birthday/birth7.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },

    {
      id: '9',
      name: 'Birthday',
      image: require('../assets/images/birthday/birth8.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
  ]);
  const [discount, setDiscount] = useState([
    {
      id: '1',
      name: 'Engagement',
      price: "250$-300$",
      image:  require('../assets/images/nikah/nikah4.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '2',
      name: 'Bridal Shower',
      image: require('../assets/images/dec3.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '3',
      name: 'Mayon',
      image: require('../assets/images/nikah/nikah3.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '4',
      name: 'Mehndi',
      image: require('../assets/images/dec8.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '5',
      name: 'Nikah',
      image: require('../assets/images/dec5.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '6',
      name: 'Barat',
      image: require('../assets/images/nikah/nikah6.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '7',
      name: 'Walima',
      image: require('../assets/images/nikah/nikah4.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
  ]);
  
  const images = [
    require('../assets/images/nikah/nikah1.jpg'),
    require('../assets/images/islamic/islamic9.jpg'),
    require('../assets/images/nikah/nikah3.jpg'),
    require('../assets/images/nikah/nikah4.jpg'),
    require('../assets/images/birthday/birth10.jpg'),
    require('../assets/images/nikah/nikah8.jpg'),
  ];
  const [wedding, setWedding] = useState([
    {
      id: '1',
      name: 'Engagement',
      price: "250$-300$",
      image: require('../assets/images/engage/eng5.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '2',
      name: 'Bridal Shower',
      image: require('../assets/images/wedding/wed2.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '3',
      name: 'Mayon',
      image: require('../assets/images/wedding/wed3.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '4',
      name: 'Mehndi',
      image: require('../assets/images/wedding/wed4.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '5',
      name: 'Nikah',
      image: require('../assets/images/wedding/wed5.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '6',
      name: 'Barat',
      image: require('../assets/images/wedding/wed6.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '7',
      name: 'Walima',
      image: require('../assets/images/wedding/wed7.jpg'),
      des: ' is a celebration held in honor of a bride-to-be before her wedding day.',
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      <DrawerHeader props={props} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Swiper
          autoplay
          autoplayTimeout={5}
        >
          {images.map((image, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Products')}>
                <Image
                  source={image}
                  style={[ImageStyles.swiperImage,]} // Adjust dimensions
                  resizeMode="contain" // or "contain", based on your design
                />
              </TouchableOpacity>
            </View>
          ))}
        </Swiper>  */}

        <FlatList
          data={category}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return <CategoryCard item={item} props={props} />;
          }}
        />
        <Swiper
          style={{ height: hp('35') }}
          autoplay={true}
          autoplayTimeout={2}
        >
          {images.map((image, index) => (
            // Adjust dimensions
            <View key={index}

            >
              <TouchableOpacity onPress={() => props.navigation.navigate('VendorsAvailable')}>
                <Image
                  style={[ImageStyles.swiperImage]}
                  source={image}
                  resizeMode="cover" // or "cover", based on your design
                />
              </TouchableOpacity>
            </View>
          ))}
        </Swiper>

        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',backgroundColor:AppColors.background }}>
            <Text style={[LabelStyles.headingSmDark, { margin: 10 }]}>Most Famous Events</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('VendorsAvailable')} >
              <Text style={[LabelStyles.seeAll, { margin: 10 }]}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={wedding}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return <InnerCategoryCard item={item} props={props} />;
            }}
          />
        </View>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',backgroundColor:AppColors.background }}>
            <Text style={[LabelStyles.headingSmDark, { margin: 10 }]}>Discounted</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('VendorsAvailable')}>

              <Text style={[LabelStyles.seeAll, { margin: 10 }]}>See all</Text>

            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={discount}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return <InnerCategoryCard item={item} props={props} />;
            }}
          />
        </View>
        <View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Categories;
