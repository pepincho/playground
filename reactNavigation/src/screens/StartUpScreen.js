import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';


import SignInScreen from './SignInScreen';


export default class StartUpScreen extends Component<{}> {
  render() {

    // const screen = SignInScreen;
    // const params = null;
    // const path = null;
    // const { router } = screen;
    // const action = path && router.getActionForPathAndParams(path, params);

    setTimeout(
      () => {
        this.props.navigation.navigate('SignInScreen', {}, null);
        // this.props.navigation.navigate('MainServiceScreen');
        // this.props.navigation.navigate('StartBirthdayScreen');
      }, 1000
    );

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          START UP SCREEN!
        </Text>
      </View>
    );
  }
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
