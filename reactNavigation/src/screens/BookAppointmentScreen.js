import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class BookAppointmentScreen extends Component<{}> {

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Book Appointment SCREEN!
        </Text>

        <Text
          onPress={() => this.props.navigation.goBack()}
        >
          Go Back!
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
