import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//....import UseContext........
import { AppProvider } from './src/context/AppContext';

//..............import screens............
import AppIntroScreen from './src/screens/Onboarding/AppIntroScreen'
import SplashScreen from './src/screens/Splash/SplashScreen';
import LoginScreen from './src/screens/Customer/Auth/SignupScreen';
import SignupScreen from './src/screens/Customer/Auth/SignupScreen';
import Categories from './src/screens/Categories';
import Subcategories from './src/screens/Subcategories';
import Products from './src/screens/Products';
import Cart from './src/screens/Cart/Cart';
// import BookingScreen from './src/screens/BookingScreen';
// import VendorScreen from './src/screens/VendorScreen';
import TermsAndConditions from './src/screens/TermsAndConditions';
import CancelledOrders from './src/screens/Orders/CancelledOrders';
import OngoingOrders from './src/screens/Orders/OngoingOrders';
import CompletedOrders from './src/screens/Orders/CompletedOrders';
//.....import DrawerScreens...........
import CustomerDrawer from './src/components/drawer/CustomerDrawer';
import SellerDrawer from './src/components/drawer/SellerDrawer';
// import {enableLatestRenderer} from 'react-native-maps';
import ExploreScreen from './src/screens/Maps/ExploreScreen';
import SingleProductDetail from './src/screens/SingleProductDetail';
import AppIntroContainer from './src/screens/Onboarding/AppIntroContainer';
// import Map from './src/screens/Maps/Map';
import { StatusBar } from 'react-native';
import SellerSignup from './src/screens/Auth/SellerSignup';
import SellerLogin from './src/screens/Auth/SellerLogin';
import SellerCategories from './src/screens/SellerScreens/SellerCategories';
import MyProducts from './src/screens/SellerScreens/MyProducts';
import AddProducts from './src/screens/SellerScreens/AddProducts';
import AddedProducts from './src/screens/SellerScreens/AddedProducts';
import SellerProfile from './src/screens/SellerScreens/SellerProfile';
import FavouriteScreen from './src/screens/FavouriteScreen';
import SellerListScreen from './src/screens/SellerScreens/SellerListScreen';
import SellerDetailScreen from './src/screens/SellerScreens/SellerDetailScreen';

import ProductDetail from './src/screens/SellerScreens/ProductDetail';
import Orders from './src/screens/Orders/Orders';
import VendorsAvailable from './src/screens/VendorsAvailable';
// enableLatestRenderer();
//....navigation constant...
const Stack = createNativeStackNavigator();
//....onboarding...

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SplshScreen">
          <Stack.Screen name="SplshScreen" component={SplashScreen} />

          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="SellerSignup" component={SellerSignup} />
          <Stack.Screen name="SellerLogin" component={SellerLogin} />
          <Stack.Screen name="CustomerDrawer" component={CustomerDrawer} />
          <Stack.Screen name="VendorDrawer" component={SellerDrawer} />
          <Stack.Screen name="VendorsAvailable" component={VendorsAvailable} />
          <Stack.Screen name="SellerCategories" component={SellerCategories} />
          <Stack.Screen name="SellerProfile" component={SellerProfile} />
          <Stack.Screen name="SellerList" component={SellerListScreen} />
          <Stack.Screen name="SellerDetail" component={SellerDetailScreen} />
          <Stack.Screen name="AddProducts" component={AddProducts} />
          <Stack.Screen name="MyProducts" component={MyProducts} />
          <Stack.Screen name="AddedProducts" component={AddedProducts} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Subcategories" component={Subcategories} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
          <Stack.Screen name="SingleProductDetail" component={SingleProductDetail} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
          <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};
export default App;
