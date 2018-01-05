import React from 'react';
import {
  Platform
} from 'react-native';

import {
  // StackNavigator,
  StackRouter,
  // TabRouter,
} from 'react-navigation';


import StartUpScreen from '../screens/StartUpScreen';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

import ListServicesScreen from '../screens/ListServicesScreen';
import BookAppointmentScreen from '../screens/BookAppointmentScreen';

import AppointmentsScreen from '../screens/AppointmentsScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import SalonInfoScreen from '../screens/SalonInfoScreen';


const AppRouter = StackRouter(
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
    ListServicesScreen: {
      screen: ListServicesScreen,
      path: 'list_services',
      navigationOptions: {
        title: 'Services',
      },
    },
    BookAppointmentScreen: {
      screen: BookAppointmentScreen,
      path: 'book_service',
      navigationOptions: {
        title: 'Book Appointment',
        tabBarVisible: false,
      },
    },
    AppointmentsScreen: {
      screen: AppointmentsScreen,
      path: 'my_appointments',
      navigationOptions: {
        title: 'My Appointments',
      },
    },
    UpdateProfileScreen: {
      screen: UpdateProfileScreen,
      path: 'update_profile',
      navigationOptions: {
        title: 'Profile',
      },
    },
    SalonInfoScreen: {
      screen: SalonInfoScreen,
      path: 'salon_info',
      navigationOptions: {
        title: 'Info',
      },
    },
  },
  {
    initialRouteName: 'StartUpScreen',
    headerMode: 'none',
    mode: 'card',
  }
);

export default AppRouter;
