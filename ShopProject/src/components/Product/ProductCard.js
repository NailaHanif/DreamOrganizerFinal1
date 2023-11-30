// // import React, { useContext } from 'react';
// // import {TouchableOpacity,Image, View, Text} from 'react-native';
// // import {Neomorph} from 'react-native-neomorph-shadows-fixes';
// // import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
// // import ContainerStyles from '../../assets/styles/ContainerStyles';
// // import ImageStyles from '../../assets/styles/ImageStyles';
// // import AppColors from '../../assets/colors/AppColors';
// // import LabelStyles from '../../assets/styles/LabelStyles';
// // import OtherStyles from '../../assets/styles/OtherStyles';
// // import AppContext from '../../context/AppContext';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';
// // const ProductCard = ({navigation,item}) => {
// //    const {storeSelectedProduct,isaddedIntoCart,storeIsAddedIntoCart} = useContext(AppContext); 
// //   return (
// //     <TouchableOpacity onPress={()=>{
// //       storeSelectedProduct(item.title);  
// //       navigation.navigate('SingleProductDetail',{item:item});
// //     }}>
// //       <Neomorph
// //         swapShadows // <- change zIndex of each shadow color
// //         style={[
// //           ContainerStyles.squareBoxHalfScreenContainer,

// //         ]}>
// //         <Image source={item.image} style={[ImageStyles.ProductCardImage]} />
// //         <Text style={[LabelStyles.headingSmDark, {marginTop: 10}]}>
// //           {item.title}
// //         </Text>
// //         <View style={{ height:hp('30'),paddingHorizontal:0,justifyContent:"space-between",flexDirection:"row"}}>
// //         <Text style={[LabelStyles.headingSmDark, {marginTop: 10}]}>
// //         Rs. {item.price}- 
// //         </Text>
// //         <TouchableOpacity style={{marginTop: 10}} onPress={()=>{
// // storeIsAddedIntoCart();
// // }}>
// //             <FontAwesome name='heart' size={24} color={isaddedIntoCart?red:AppColors.charcol} />
// //         </TouchableOpacity>
// //         </View>
// //       </Neomorph>
// //     </TouchableOpacity>
// //   );
// // };

// // export default ProductCard;
// import React, { useContext, useState } from 'react';
// import { TouchableOpacity, Image, View, Text ,ImageBackground} from 'react-native';
// import { Neomorph } from 'react-native-neomorph-shadows-fixes';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import ContainerStyles from '../../assets/styles/ContainerStyles';
// import ImageStyles from '../../assets/styles/ImageStyles';
// import AppColors from '../../assets/colors/AppColors';
// import LabelStyles from '../../assets/styles/LabelStyles';
// import OtherStyles from '../../assets/styles/OtherStyles';
// import AppContext from '../../context/AppContext';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import StarRating from '../StarRating';
// const ProductCard = ({ props, item }) => {
//   // const { storeSelectedProduct, addToCart, isAddedIntoCart, storeIsAddedIntoCart } = useContext(AppContext);
//   //   const [heartColor, setHeartColor] = useState(isAddedIntoCart ? 'red' : AppColors.charcol);
//     // const handleAddToCart = () => {
//     //     addToCart(item); // Add the item to the cart
//     //     storeIsAddedIntoCart(true); // Set added to cart flag to true
//     //     setHeartColor({heartColor}); // Change heart color to indicate added to cart
//     //     storeIsAddedIntoCart(!isAddedIntoCart)
//     //     props.navigation.navigate('SinleProductDetail')
//     // };
//   return (
//     <View style={[ContainerStyles.fullScreenCenteredContainer]}><TouchableOpacity
//       onPress={() => props.navigation.navigate('SingleProductDetail')}>
//       <View  >
//         <ImageBackground imageStyle={{borderRadius:20}} source={item.image} style={[ImageStyles.ProductCardImage]}>
//         {/* <Image source={item.image} style={[ImageStyles.ProductCardImage]} /> */}

//         <View style={{height:hp('5'),backgroundColor:'transparent',width:wp('40'),opacity:1,justifyContent:'space-between',flexDirection:'row'}}>
//         <Text style={[ { marginBottom: 5,paddingHorizontal:10 ,color:'white',fontFamily:'Poppins-Light',fontSize:20}]}>
//           {item.name}
//         </Text>  
//         <TouchableOpacity onPress={()=>{
//           Alert.alert('Remove from Favorites')
//         }}>
//             <FontAwesome name='heart' size={15} color={'red'} style={{marginTop:8}} />
//           </TouchableOpacity>
//         </View>
//         </ImageBackground>
//         </View>
//     </TouchableOpacity></View>

//   );
// };
// export default ProductCard;
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import ContainerStyles from '../../assets/styles/ContainerStyles'
import ImageStyles from '../../assets/styles/ImageStyles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const AddProduct = ({ props, item }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('SingleProductDetail')}>

        <ImageBackground imageStyle={{ borderRadius: 20, }} source={item.image} style={[ImageStyles.ProductCardImage]}>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',opacity:1, }}>
          <Text style={{color:'white',fontFamily:'Poppins-Regular',fontSize:16}}>{item.name}</Text>
         <TouchableOpacity onPress={()=>props.navigation.navigate('FavouriteScreen')}>
         <FontAwesome name='heart' size={15} color={'red'} style={{marginTop:8}} /> */}
          {/* </TouchableOpacity>
        </View> */}
        </ImageBackground>

      </TouchableOpacity>
    </View>
  )
}

export default AddProduct