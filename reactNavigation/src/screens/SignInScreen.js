import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class SignInScreen extends Component<{}> {

  handlegoToSignUpPress = () => {
    this.props.navigation.navigate('SignUpScreen', {}, null);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to SignInScreen!
        </Text>

        <Text
          style={styles.instructions}
          onPress={this.handlegoToSignUpPress}
        >
          Go to SignUpScreen
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
});
