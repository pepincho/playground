import React from 'react';
import { StackNavigator, StackRouter } from 'react-navigation';


import StartUpScreen from '../screens/StartUpScreen';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';


const AuthStack = StackNavigator(
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


export const Root = StackNavigator(
  {
    Auth: {
      screen: AuthStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
