import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AppColors from "../../assets/colors/AppColors";
//........import DrawerScreens.....
import LoginScreen from "../../screens/Auth/SellerLogin";
import Categories from "../../screens/Categories";
import Profile from "../../screens/DrawerScreens/Profile";
import MyEvents from "../../screens/DrawerScreens/MyEvents";
import Settings from "../../screens/DrawerScreens/Settings";
import SellerCustomDrawer from "./SellerCustomDrawer";
import ExploreScreen from "../../screens/Maps/ExploreScreen";
import MyGoogleMap from "../../screens/Maps/MyGoogleMap";
import Cart from "../../screens/Cart/Cart";
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen";
import SellerCategories from "../../screens/SellerScreens/SellerCategories";
import AddedProducts from "../../screens/SellerScreens/AddedProducts";
const Drawer = createDrawerNavigator();

const SellerDrawer= props =>{
  return(
    <View style={{flex: 1}}>
      <Drawer.Navigator props={props}
      drawerContent={props=><SellerCustomDrawer {...props}/>
    }
        screenOptions={{
          overlayColor: 'tranparent',
          drawerType: 'back',
          headerShown:false,
          drawerPosition:'right',
          drawerStyle: {
            backgroundColor: '#FFF',
            width:wp('100')
          },

          // drawerActiveTintColor: '#5e48ce',
          drawerLabelStyle: {
            color: AppColors.primary,
          },
          drawerLabelStyle: {
            color: AppColors.grey,
            fontFamily: 'Poppins-Regular',
          },
        }}
        >
        <Drawer.Screen
          name="Categories"
          component={SellerCategories}
          options={{
            drawerIcon: () => (
              <Ionicons name="home-outline" size={22} color={[AppColors.red]} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: () => (
              <Ionicons
                name="person-outline"
                size={22}
                color={AppColors.grey}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="MyProducts"
          component={AddedProducts}
          options={{
            drawerIcon: () => (
              <Ionicons
                name="grid-outline"
                size={22}
                color={[AppColors.blue]}
              />
            ),
          }}
        />
          <Drawer.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            drawerIcon: () => (
              <AntDesign
                name="find"
                size={22}
                color={[AppColors.charcol]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: () => (
              <Ionicons
                name="settings-outline"
                size={22}
                color={[AppColors.charcol]}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </View>

  )
}

export default SellerDrawer;    