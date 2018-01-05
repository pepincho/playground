import React from 'react';
import {
  Platform
} from 'react-native';

import {
  StackNavigator,
  // StackRouter,
  // TabRouter,
  createNavigator,
  createNavigationContainer,
  addNavigationHelpers,
} from 'react-navigation';


import MainTabs from './MainTabs';
import DrawerView from '../components/DrawerView';


const Root = StackNavigator(
  {
    MainTabs: {
      screen: MainTabs,
    }
  },
  {
    initialRouteName: 'MainTabs',
    mode: 'modal',
    headerMode: 'none',
  }
);


const CustomDrawer = createNavigationContainer(
  createNavigator(Root)(DrawerView)
);

export default CustomDrawer;
