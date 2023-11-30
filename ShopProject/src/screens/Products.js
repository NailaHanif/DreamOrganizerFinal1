import { View, Text, Image, FlatList, SafeAreaView } from 'react-native';
import React, { useContext, useState } from 'react';
import BackButtonHeader from '../components/headers/BackButtonHeader';
import SubCategoryCard from '../components/Product/ProductCard';
import AppContext from '../context/AppContext';
import Form from './Form';
import ContainerStyles from '../assets/styles/ContainerStyles';
import ProductCard from '../components/Product/ProductCard';
const Products = (props) => {
  const { selectedSC } = useContext(AppContext);
  const [product, setProduct] = useState([
    {
      id: '1',
      name: 'Engagement',
      price: "250$-300$",
      image: require('../assets/images/engage/eng1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '2',
      name: 'Engagement',
      price: "250$-300$",
      image: require('../assets/images/engage/eng2.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '3',
      name: 'Engagement',
      price: "250$-300$",
      image: require('../assets/images/engage/eng3.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '4',
      name: 'Engagement',
      price: "250$-300$",
      image: require('../assets/images/engage/eng4.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '5',
      name: 'Engagement',
      price: "250$-300$",
      image: require('../assets/images/engage/eng4.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '6',
      name: 'Engagement',
      price: "250$-300$",
      image: require('../assets/images/engage/eng6.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },

    {
      id: '7',
      name: 'Barat',
      price: "250$-300$",
      image: require('../assets/images/wedding/wed1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '8',
      name: 'Wedding',
      price: "250$-300$",
      image: require('../assets/images/wedding/wed2.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '9',
      name: 'Wedding',
      price: "250$-300$",
      image: require('../assets/images/wedding/wed3.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '10',
      name: 'Wedding',
      price: "250$-300$",
      image: require('../assets/images/wedding/wed4.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '11',
      name: 'Wedding',
      price: "250$-300$",
      image: require('../assets/images/wedding/wed5.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '12',
      name: 'Wedding',
      price: "250$-300$",
      image: require('../assets/images/wedding/wed6.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
  ]
  )

  const [engagement, setEngagement] = useState(
    [
      {
        id: '1',
        name: 'Engagement',
        price: "250$-300$",
        image: require('../assets/images/engage/eng1.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      },
      {
        id: '2',
        name: 'Engagement',
        price: "250$-300$",
        image: require('../assets/images/engage/eng2.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      }, {
        id: '3',
        name: 'Engagement',
        price: "250$-300$",
        image: require('../assets/images/engage/eng3.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      }, {
        id: '4',
        name: 'Engagement',
        price: "250$-300$",
        image: require('../assets/images/engage/eng4.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      }, {
        id: '5',
        name: 'Engagement',
        price: "250$-300$",
        image: require('../assets/images/engage/eng4.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      }, {
        id: '6',
        name: 'Engagement',
        price: "250$-300$",
        image: require('../assets/images/engage/eng6.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      },
    ])
  const [barat, setBarat] = useState(
    [
      {
        id: '1',
        name: 'Barat',
        price: "250$-300$",
        image: require('../assets/images/wedding/wed1.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      },
      {
        id: '2',
        name: 'Wedding',
        price: "250$-300$",
        image: require('../assets/images/wedding/wed2.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      }, {
        id: '3',
        name: 'Wedding',
        price: "250$-300$",
        image: require('../assets/images/wedding/wed3.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      }, {
        id: '4',
        name: 'Wedding',
        price: "250$-300$",
        image: require('../assets/images/wedding/wed4.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      }, {
        id: '5',
        name: 'Wedding',
        price: "250$-300$",
        image: require('../assets/images/wedding/wed5.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      }, {
        id: '6',
        name: 'Wedding',
        price: "250$-300$",
        image: require('../assets/images/wedding/wed6.jpg'),
        des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
      },
    ])
  const [nikah, setNikah] = useState([
    {
      id: '1',
      name: 'Nikah',
      price: "250$-300$",
      image: require('../assets/images/nikah/nikah1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '2',
      name: 'Nikah',
      price: "250$-300$",
      image: require('../assets/images/nikah/nikah2.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '3',
      name: 'Nikah',
      price: "250$-300$",
      image: require('../assets/images/nikah/nikah3.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '4',
      name: 'Nikah',
      price: "250$-300$",
      image: require('../assets/images/nikah/nikah4.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '5',
      name: 'Nikah',
      price: "250$-300$",
      image: require('../assets/images/nikah/nikah7.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '6',
      name: 'Nikah',
      price: "250$-300$",
      image: require('../assets/images/nikah/nikah6.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
  ])
  const [birthday, setBirthday] = useState([
    {
      id: '1',
      name: 'Birthday',
      price: "250$-300$",
      image: require('../assets/images/birthday/birth1.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '2',
      name: 'Birthday',
      price: "250$-300$",
      image: require('../assets/images/birthday/birth2.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '3',
      name: 'Birthday',
      price: "250$-300$",
      image: require('../assets/images/birthday/birth3.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '4',
      name: 'Birthday',
      price: "250$-300$",
      image: require('../assets/images/birthday/birth4.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '5',
      name: 'Birthday',
      price: "250$-300$",
      image: require('../assets/images/birthday/birth5.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
    {
      id: '6',
      name: 'Birthday',
      price: "250$-300$",
      image: require('../assets/images/birthday/birth6.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '7',
      name: 'Birthday',
      price: "250$-300$",
      image: require('../assets/images/birthday/birth7.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '8',
      name: 'Birthday',
      price: "250$-300$",
      image: require('../assets/images/birthday/birth8.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '9',
      name: 'Birthday',
      price: "250$-300$",
      image: require('../assets/images/birthday/birth9.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    }, {
      id: '10',
      name: 'Birthday',
      price: "250$-300$",
      image: require('../assets/images/birthday/birth10.jpg'),
      des: 'A bridal shower is a celebration held in honor of a bride-to-be before her wedding day.',
    },
  ])


  return (
    <View style={{ flex: 1 }}>
      <BackButtonHeader title={'Designs'} props={props} />
      <FlatList
        numColumns={2}
        data={product}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return <ProductCard item={item} props={props} />;
        }}
      />
    </View>
  )

  // if (selectedSC == 'Engagement') {
  //   return (
  //     <View style={{flex:1}}>
  //       <BackButtonHeader title={'Products'} props={props} />
  //       <FlatList
  //         numColumns={2}
  //         data={engagement}
  //         keyExtractor={item => item.id.toString()}
  //         renderItem={({item}) => {
  //           return <ProductCard item={item} props={props} />;
  //         }}
  //       />
  //     </View>
  //   );
  // }
  // else if (selectedSC == 'Barat') {
  //   return (
  //     <View style={{flex:1}}>
  //       <BackButtonHeader title={'Products'} props={props} />
  //       <FlatList
  //         numColumns={2}
  //         data={barat}
  //         keyExtractor={item => item.id.toString()}
  //         renderItem={({item}) => {
  //           return <ProductCard item={item} props={props} />;
  //         }}
  //       />
  //     </View>
  //   );
  // }
  // else if (selectedSC == 'Nikah') {
  //   return (
  //     <View style={{flex:1}}>
  //       <BackButtonHeader title={'Products'} props={props} />
  //       <FlatList
  //         numColumns={2}
  //         data={nikah}
  //         keyExtractor={item => item.id.toString()}
  //         renderItem={({item}) => {
  //           return <ProductCard item={item} props={props} />;
  //         }}
  //       />
  //     </View>
  //   );
  // }
  // else if (selectedSC == 'Bridal Shower') {
  //   return (
  //     <View style={{flex:1}}>
  //       <BackButtonHeader title={'Products'} props={props} />
  //       <FlatList
  //         numColumns={2}
  //         data={nikah}
  //         keyExtractor={item => item.id.toString()}
  //         renderItem={({item}) => {
  //           return <ProductCard item={item} props={props} />;
  //         }}
  //       />
  //     </View>
  //   );
  // }
  // else if (selectedSC == 'Mayon') {
  //   return (
  //     <View style={{flex:1}}>
  //       <BackButtonHeader title={'Products'} props={props} />
  //       <FlatList
  //         numColumns={2}
  //         data={nikah}
  //         keyExtractor={item => item.id.toString()}
  //         renderItem={({item}) => {
  //           return <ProductCard item={item} props={props} />;
  //         }}
  //       />
  //     </View>
  //   );
  // }
  // else if (selectedSC == 'Mehndi') {
  //   return (
  //     <View style={{flex:1}}>
  //       <BackButtonHeader title={'Products'} props={props} />
  //       <FlatList
  //         numColumns={2}
  //         data={nikah}
  //         keyExtractor={item => item.id.toString()}
  //         renderItem={({item}) => {
  //           return <ProductCard item={item} props={props} />;
  //         }}
  //       />
  //     </View>
  //   );
  // }
  // else if (selectedSC == 'Barat') {
  //   return (
  //     <View style={{flex:1}}>
  //       <BackButtonHeader title={'Products'} props={props} />
  //       <FlatList
  //         numColumns={2}
  //         data={barat}
  //         keyExtractor={item => item.id.toString()}
  //         renderItem={({item}) => {
  //           return <ProductCard item={item} props={props} />;
  //         }}
  //       />
  //     </View>
  //   );
  // }
  // else if (selectedSC == 'Walima') {
  //   return (
  //     <View style={{flex:1}}>
  //       <BackButtonHeader title={'Products'} props={props} />
  //       <FlatList
  //         numColumns={2}
  //         data={nikah}
  //         showsVerticalScrollIndicator={false}
  //         keyExtractor={item => item.id.toString()}
  //         renderItem={({item}) => {
  //           return <ProductCard item={item} props={props.navigation} />;
  //         }}
  //       />
  //     </View>
  //   );
  // }
  // else if (selectedSC == 'Birthday') {
  //   return (
  //     <View style={{flex:1,backgroundColor:'black'}}>
  //       <BackButtonHeader title={'Products'} props={props} />
  //       <FlatList
  //         numColumns={2}
  //         data={birthday}
  //         showsVerticalScrollIndicator={false}
  //         keyExtractor={item => item.id.toString()}
  //         renderItem={({item}) => {
  //           return <ProductCard item={item} props={props.navigation} />;
  //         }}
  //       />
  //     </View>
  //   );
  // }
}

export default Products;
