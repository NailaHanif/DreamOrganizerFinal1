import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CancelledOrders from './CancelledOrders';
import OngoingOrders from './OngoingOrders';
import CompletedOrders from './CompletedOrders';
import IonIcons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import AppColors from '../../assets/colors/AppColors';
const Tab = createBottomTabNavigator();
const Orders = (props) => {

  return (
   <Tab.Navigator screenOptions={{
    headerShown:false,
    tabBarActiveBackgroundColor:AppColors.white,
    tabBarActiveTintColor:AppColors.primary
   }}>
    <Tab.Screen name="Ongoing" component={OngoingOrders} options={{
      tabBarIcon:({focused})=>{
        return(
          <IonIcons name='home' size={20} color={focused?AppColors.primary:"grey"}/>
        )
      }
    }} />
    <Tab.Screen name="Cancelled" component={CancelledOrders} options={{
      tabBarIcon:({focused})=>{
        return(
          <IonIcons name='home' size={20} color={focused?AppColors.primary:"grey"}/>
        )
      }
    }}/>
    <Tab.Screen name="completed" component={CompletedOrders} options={{
      tabBarIcon:({focused})=>{
        return(
          <IonIcons name='home' size={20} color={focused?AppColors.primary:"grey"}/>
        )
      }
    }}/>
   </Tab.Navigator>
  );
}
export default Orders;