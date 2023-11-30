import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '../components/Icon';
import Categories from './Categories';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppColors from '../assets/colors/AppColors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import RootStackScreen from './RootStackScreen';
import Profile from './DrawerScreens/Profile';
import Settings from './DrawerScreens/Settings';
//Array for icons
const BottomTab = () => {
  const TabArr = [
    {text: 'home', icon: 'home', action: NavigateToHome},
    {text: 'home', icon: 'home', action: NavigateToHome},
    {text: 'home', icon: 'home', action: NavigateToHome},
  ];
  const NavigateToHome = () => {
    console.log('home');
  };
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    tabBarShownLabel: false,
    headerShown: false,
    tabBarHiddenKeyboard: true,
    tabBarActiveTintColor: AppColors.background,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: hp('8%'),
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {/* <Tab.Screen
        name="home"
        component={RootStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome
                name="home"
                size={24}
                color={focused ? AppColors.background : AppColors.grey}
              />
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome
                name="user-o"
                size={24}
                color={focused ? AppColors.background : AppColors.grey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name="settings-outline"
                size={24}
                color={focused ? AppColors.background : AppColors.grey}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen name="Explore" component={Settings} options={{
          tabBarIcon:({focused})=>{
             return(
              <Ionicons name="settings-outline" size={24} color={focused?AppColors.background :AppColors.grey}/>
             )
          }
        }}/> */}
    </Tab.Navigator>
  );
};
export default BottomTab;
