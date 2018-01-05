import React from 'react';
import {
  Platform
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';


import StartUpScreen from '../screens/StartUpScreen';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

import ListServicesScreen from '../screens/ListServicesScreen';
import BookAppointmentScreen from '../screens/BookAppointmentScreen';

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
    },
    SignUpScreen: {
      screen: SignUpScreen,
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
      navigationOptions: {
        title: 'Services',
      },
    },
    BookAppointmentScreen: {
      screen: BookAppointmentScreen,
      navigationOptions: {
        title: 'Book Appointment',
        tabBarVisible: false,
      },
    },
  },
  {
    initialRouteName: 'ListServicesScreen',
  }
);

export const AppointmentsStack = StackNavigator(
  {
    AppointmentsScreen: {
      screen: AppointmentsScreen,
      navigationOptions: {
        title: 'My Appointments',
      },
    },
  },
  {
    initialRouteName: 'AppointmentsScreen',
  }
);

export const ProfileStack = StackNavigator(
  {
    UpdateProfileScreen: {
      screen: UpdateProfileScreen,
      navigationOptions: {
        title: 'Profile',
      },
    },
  },
  {
    initialRouteName: 'UpdateProfileScreen',
  }
);

export const InfoStack = StackNavigator(
  {
    SalonInfoScreen: {
      screen: SalonInfoScreen,
      navigationOptions: {
        title: 'Info',
      },
    },
  },
  {
    initialRouteName: 'SalonInfoScreen',
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
      screen: AppointmentsStack,
      navigationOptions: {
        tabBarLabel: 'My Appointments',
      },
    },
    UpdateProfileScreen: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
    SalonInfoScreen: {
      screen: InfoStack,
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


export const Root = StackNavigator(
  {
    Auth: {
      screen: AuthStack,
    },
    Tabs: {
      screen: Tabs,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
