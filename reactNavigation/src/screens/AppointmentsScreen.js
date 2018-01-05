import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import CustomTabBar from '../components/CustomTabBar';

import CommonStyles from '../styles/CommonStyles';
import {
  deviceHeight,
  NAV_HEIGHT,
  TAB_HEIGHT,
  STATUSBAR_HEIGHT
} from '../styles/variables';



export default class AppointmentsScreen extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Appointments SCREEN!
        </Text>

        <CustomTabBar
          navigation={this.props.navigation}
          isActive='tabTwo'
        />

      </View>
    );
  }
}

AppointmentsScreen.navigationOptions = {
  tabBarVisible: false
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
