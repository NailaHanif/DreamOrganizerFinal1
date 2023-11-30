import React, { useContext } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import HeaderStyles from '../../assets/styles/HeaderStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ContainerStyles from '../../assets/styles/ContainerStyles';
import AppColors from '../../assets/colors/AppColors';
import AppContext from '../../context/AppContext';
const CartScreenHeader = ({is_favourite_added, props,item}) => {
  const {selectedSC,selectedC,storeInCart,setIsAddedIntoCart,isAddedIntoCart} = useContext(AppContext);
  return (
    <View style={[HeaderStyles.backButtonHeader]}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}>
        <FontAwesome name="chevron-left" size={22} color={'white'}/>
      </TouchableOpacity>
      <View style={{flexDirection:"row",}}>
      <TouchableOpacity onPress={()=>{
  props.navigation.navigate('Cart'); // Navigate to the Cart screen
}}>
  <FontAwesome name="shopping-cart" size={wp('7')} color={'white'} style={{marginRight:10}} />
</TouchableOpacity>
          <TouchableOpacity onPress={() => {
            let singleProductDetailObject = {
              // human_category:selectedC,
              category:selectedC,
              subCategory:selectedSC,
              product_image:item.image,
              product_title:item.name,
              product_description:item.des,
              product_price:item.price, 
              event_date: item.event_date,
              product_is_added_Favourite:item.is_favourite_added
            };
            isAddedIntoCart =setIsAddedIntoCart(!isAddedIntoCart);
            storeInCart(singleProductDetailObject);
            }}>
            <FontAwesome name="heart" size={20} color={is_favourite_added ? "red" : "charcol"} />
          </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartScreenHeader;
