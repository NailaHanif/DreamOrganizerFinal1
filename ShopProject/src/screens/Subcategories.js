import {View, Text, Image,FlatList, SafeAreaView} from 'react-native';
import React, {useContext, useState} from 'react';
import BackButtonHeader from '../components/headers/BackButtonHeader';
import SubCategoryCard from '../components/SubCategoryCard';
import AppContext from '../context/AppContext';
import Form from './Form';
import ProductCard from '../components/Product/ProductCard';
import AppColors from '../assets/colors/AppColors';
const Subcategories = props => {
  const {selectedC} = useContext(AppContext);
  const [wedding, setWedding] = useState([
    {
      id: '1',
      name: 'Engagement',
      price: "250$-300$",
      image: require('../assets/images/engage/eng5.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '2',
      name: 'Bridal Shower',
      image: require('../assets/images/wedding/bridalS1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '3',
      name: 'Mayon',
      image: require('../assets/images/mehni1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '4',
      name: 'Mehndi',
      image: require('../assets/images/wedding/mehnd1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '5',
      name: 'Nikah',
      image: require('../assets/images/nikah/nikah1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '6',
      name: 'Barat',
      image: require('../assets/images/wedding/wed1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '7',
      name: 'Walima',
      image: require('../assets/images/nikah/nikah6.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '8',
      name: 'Custom',
      image: require('../assets/images/nikah/nikah6.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
  ]);
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
  const [party, setParty] = useState([
    {
      id: '1',
      name: 'Welcome',
      image: require('../assets/images/dec1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '2',
      name: 'Farewell',
      image: require('../assets/images/party/party1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '3',
      name: 'Discount',
      image: require('../assets/images/party/party2.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '4',
      name: 'Annual Jubly',
      image: require('../assets/images/party/party3.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '5',
      name: '50 jubly',
      image: require('../assets/images/dec1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '6',
      name: '50 jubly',
      image: require('../assets/images/dec7.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '7',
      name: '50 jubly',
      image: require('../assets/images/dec3.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '8',
      name: '50 jubly',
      image: require('../assets/images/dec4.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '9',
      name: '50 jubly',
      image: require('../assets/images/dec5.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },{
      id: '10',
      name: '50 jubly',
      image: require('../assets/images/dec8.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
  ]);
  const [edu, setEdu] = useState([
    {
      id: '1',
      name: 'Welcome',
      image: require('../assets/images/edu.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '2',
      name: 'Farewell',
      image: require('../assets/images/edu.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '3',
      name: 'Graduation',
      image: require('../assets/images/graduation.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '4',
      name: 'Annual Result',
      image: require('../assets/images/dec4.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
  ]);
  const [islamic, setIslamic] = useState([
    {
      id: '1',
      name: 'Milaad',
      image: require('../assets/images/milaad.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '2',
      name: 'Eid-ul-Fitar',
      image: require('../assets/images/eidulfitr.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '3',
      name: 'Eid-ul-Azha',
      image: require('../assets/images/azha.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '4',
      name: 'Ramzan',
      image: require('../assets/images/ramzan.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '5',
      name: 'Hifz',
      image: require('../assets/images/hifz.jpg'),
      price:"250$-300$",
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
  ]);
  if (selectedC == 'Wedding') {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:AppColors.background}}>
        <BackButtonHeader title={'Events'} props={props} />
        <View style={{justifyContent:"space-between"}}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={wedding}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return <SubCategoryCard item={item} props={props} />;
          }}
        />
        </View>
      </SafeAreaView>
    );
  }
  else if (selectedC == 'Birthday') {
    return (
      <SafeAreaView style={{flex:1}}>
        <BackButtonHeader title={'Events'} props={props} />
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={birthday}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return <ProductCard item={item} props={props} />;
          }}
        />
      </SafeAreaView>
    );
  }
  else if (selectedC == 'Parties') {
    return (
      <View style={{flex:1}}>
        <BackButtonHeader title={'Events'} props={props} />
        <FlatList
          numColumns={2}
          data={party}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return <ProductCard item={item} props={props} />;
          }}
        />
      </View>
    );
  }
  else if (selectedC == 'Islamic') {
    return (
      <View style={{flex:1}}>
        <BackButtonHeader title={'Events'} props={props} />
        <FlatList
        // showsVerticalScrollIndicator={false}
          numColumns={2}
          data={islamic}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return <SubCategoryCard item={item} props={props} />;
          }}
        />
      </View>
    );
  }
  else if (selectedC == 'Educational') {
    return (
      <View style={{flex:1}}>
        <BackButtonHeader title={'Educational Events'} props={props} />
        <FlatList
        // showsVerticalScrollIndicator={false}
          numColumns={2}
          data={edu}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return <SubCategoryCard item={item} props={props} />;
          }}
        />
      </View>
    );
  }
  // else if (selectedC == 'Birthday') {
  //   return (
  //     <View>
  //       <BackButtonHeader title={'Educational Events'} props={props} />
  //       <FlatList
  //       // showsVerticalScrollIndicator={false}
  //         numColumns={2}
  //         data={birthday}
  //         keyExtractor={item => item.id.toString()}
  //         renderItem={({item}) => {
  //           return <SubCategoryCard item={item}  />;
  //         }}
  //       />
  //     </View>
  //   );
  // }
  else if(selectedC=='Others'){
    return(<View><Form props={props}/></View>
      
    )
  }
};

export default Subcategories;
