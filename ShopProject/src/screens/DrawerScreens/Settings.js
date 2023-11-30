import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppColors from '../../assets/colors/AppColors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import { useNavigation } from '@react-navigation/native';
const Settings = (props) => {
  const navigation=useNavigation();
  const navigateToEditProfile = () => {
    navigation.navigate('Profile');
  };

  const navigateToSecurity = () => {
navigation.navigate('Security')  };

  const navigateToNotifications = () => {
    console.log('Notifications function');
  };

  const navigateToPrivacy = () => {
navigation.navigate('PrivacyScreen') 
 };

  const navigateToSubscription = () => {
    console.log('Subscription function');
  };

  const navigateToSupport = () => {
    console.log('Support function');
  };

  const navigateToTermsAndPolicies = () => {
    navigation.navigate('TermsAndConditions')
    console.log('Terms and Policies function');
  };

  const navigateToReportProblem = () => {
    console.log('Report a problem');
  };

  const addAccount = () => {
    console.log('Add account ');
  };

  const logout = () => {
    navigation.navigate('Login')
  };

  const accountItems = [
    {
      icon: 'person-outline',
      text: 'Edit Profile',
      action: navigateToEditProfile,
      color:'#009387'
    },
    {icon: 'security', text: 'Security', action: navigateToSecurity,color:'green'},
    {icon: 'lock-outline', text: 'Privacy', action: navigateToPrivacy,color:'purple'},
  ];

  const supportItems = [
    
    {icon: 'help-outline', text: 'Help & Support', action: navigateToSupport,color:'blue'},
    {
      icon: 'info-outline',
      text: 'Terms and Policies',
      action: navigateToTermsAndPolicies,
      color:'#009387'
    },
  ];

  

  const actionsItems = [
    {
      icon: 'outlined-flag',
      text: 'Report a problem',
      action: navigateToReportProblem,
      color:'red'
    },
    {icon: 'people-outline', text: 'Add Account', action: addAccount,color:'purple'},
    {icon: 'logout', text: 'Log out', action: logout,color:'blue'},
  ];
  const renderSettingsItem = ({icon, text, action,color}) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: AppColors.background,
      }}>
      <MaterialIcons name={icon} size={24} color={color}  />
      <Text
        style={{
          marginLeft: 36,
          // ...FONTS.semiBold,
          // fontWeight: 600,
          fontSize: 16,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColors.white,
      }}>
      <BackButtonHeader title="Settings" props={props}/>
      <ScrollView style={{marginHorizontal: 12}} showsVerticalScrollIndicator={false}>
        {/* Account Settings */}
        <View style={{marginBottom: 12}}>
          <Text style={{color: 'black', marginVertical: 10}}>Account</Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: AppColors.gray,
            }}>
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
        {/* Support and About settings */}
        <View style={{marginBottom: 12}}>
          <Text style={{color: 'black', marginVertical: 10}}>
            Support & About
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: AppColors.gray,
            }}>
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Cache & Cellular */}
        {/* Actions Settings */}
        <View style={{marginBottom: 12}}>
          <Text style={{color: 'black', marginVertical: 10}}>Actions</Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: AppColors.gray,
            }}>
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
