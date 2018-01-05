import React from 'react';
import {
  Platform
} from 'react-native';

import {
  // StackNavigator,
  // StackRouter,
  TabRouter,
} from 'react-navigation';


import StartUpScreen from '../screens/StartUpScreen';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

import ListServicesScreen from '../screens/ListServicesScreen';
import BookAppointmentScreen from '../screens/BookAppointmentScreen';

import AppointmentsScreen from '../screens/AppointmentsScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import SalonInfoScreen from '../screens/SalonInfoScreen';


const MainTabs = TabRouter(
  {
    ListServicesScreen: {
      screen: ListServicesScreen,
      path: 'list_services',
      navigationOptions: {
        tabBarLabel: 'Services',
      },
    },
    AppointmentsScreen: {
      screen: AppointmentsScreen,
      path: 'my_appointments',
      navigationOptions: {
        tabBarLabel: 'My Appointments',
      },
    },
    UpdateProfileScreen: {
      screen: UpdateProfileScreen,
      path: 'update_profile',
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
    SalonInfoScreen: {
      screen: SalonInfoScreen,
      path: 'salon_info',
      navigationOptions: {
        tabBarLabel: 'Info',
      },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'ListServicesScreen',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      // showLabel: false,
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    },
  }
);

export default MainTabs;
