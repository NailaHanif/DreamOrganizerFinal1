import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AppColors from "../../assets/colors/AppColors";
//........import DrawerScreens.....
import LoginScreen from "../../screens/Customer/Auth/LoginScreen";
import Categories from "../../screens/Categories";
import Profile from "../../screens/DrawerScreens/Profile";
import MyEvents from "../../screens/DrawerScreens/MyEvents";
import Settings from "../../screens/DrawerScreens/Settings";
import CustomerCustomDrawer from "./CustomerCustomDrawer";
import ExploreScreen from "../../screens/Maps/ExploreScreen";
import MyGoogleMap from "../../screens/Maps/MyGoogleMap";
import Cart from "../../screens/Cart/Cart";
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen";
const Drawer = createDrawerNavigator();

const CustomerDrawer= props =>{
  return(
    <View style={{flex: 1}}>
      <Drawer.Navigator props={props}
      drawerContent={props=><CustomerCustomDrawer {...props}/>
    }
        screenOptions={{
          overlayColor: 'tranparent',
          drawerType: 'back',
          headerShown:false,
          drawerPosition:'right',
          drawerType:'slide',
          drawerStyle: {
            backgroundColor: '#DDDDDD',
            width:wp('80%'),
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
          name="Home"
          component={Categories}
          options={{
            drawerIcon: () => (
              <Ionicons name="home-outline" size={22} color={'grey'} />
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
                color={'grey'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="MyEvents"
          component={Cart}
          options={{
            drawerIcon: () => (
              <Ionicons
                name="grid-outline"
                size={22}
                color={'grey'}
              />
            ),
          }}
        />
          {/* <Drawer.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            drawerIcon: () => (
              <AntDesign
                name="find"
                size={22}
                color={'grey'}
              />
            ),
          }}
        /> */}
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: () => (
              <Ionicons
                name="settings-outline"
                size={22}
                color={'grey'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </View>

  )
}

export default CustomerDrawer;    