import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class SignInScreen extends Component<{}> {

  handleGoToSignUpPress = () => {
    this.props.navigation.navigate('SignUpScreen', {}, null);
  };

  handleGoToServicesPress = () => {
    this.props.navigation.navigate('Tabs', {}, null);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to SignInScreen!
        </Text>

        <Text
          style={styles.instructions}
          onPress={this.handleGoToSignUpPress}
        >
          Go to SignUpScreen
        </Text>

        <Text
          style={styles.services}
          onPress={this.handleGoToServicesPress}
        >
          Go to List Services Screen!!!
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 20,
    backgroundColor: 'red',
    marginBottom: 5,
  },
  services: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 20,
    backgroundColor: 'blue',
    marginBottom: 5,
  },
});
