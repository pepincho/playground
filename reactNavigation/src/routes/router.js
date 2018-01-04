import React from 'react';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';


import StartUpScreen from '../screens/StartUpScreen';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

import ListServicesScreen from '../screens/ListServicesScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import SalonInfoScreen from '../screens/SalonInfoScreen';


export const AuthStack = StackNavigator(
  {
    StartUpScreen: {
      screen: StartUpScreen,
    },
    SignInScreen: {
      screen: SignInScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    SignUpScreen: {
      screen: SignUpScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'StartUpScreen',
    headerMode: 'none',
    mode: 'card',
  }
);


export const ListServicesStack = StackNavigator(
  {
    ListServicesScreen: {
      screen: ListServicesScreen,
    },
  },
  {
    initialRouteName: 'ListServicesScreen',
    headerMode: 'none',
    // mode: 'card',
  }
);


export const Tabs = TabNavigator(
  {
    ListServicesScreen: {
      screen: ListServicesStack,
      navigationOptions: {
        tabBarLabel: 'Services',
      },
    },
    AppointmentsScreen: {
      screen: AppointmentsScreen,
      navigationOptions: {
        tabBarLabel: 'Appointments',
      },
    },
    UpdateProfileScreen: {
      screen: UpdateProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
    SalonInfoScreen: {
      screen: SalonInfoScreen,
      navigationOptions: {
        tabBarLabel: 'Info',
      },
    },
  }
);


export const Root = StackNavigator(
  {
    Auth: {
      screen: AuthStack,
    },
    Tabs: {
      screen: Tabs,
    },
    // Services: {
    //   screen: ServicesStack,
    // }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
