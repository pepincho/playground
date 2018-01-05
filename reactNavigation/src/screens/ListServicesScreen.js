import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import CustomTabBar from '../components/CustomTabBar';

import CommonStyles from '../styles/CommonStyles';
import {
  deviceHeight,
  NAV_HEIGHT,
  TAB_HEIGHT,
  STATUSBAR_HEIGHT
} from '../styles/variables';


export default class ListServicesScreen extends Component<{}> {

  constructor(props) {
    super(props);
  }

  handleGoToBookAppointment = (name) => {
    // console.log('item >>', item)
    this.props.navigation.navigate('BookAppointmentScreen', {name}, null);
  };

  nav() {
    return this.props.navigation;
  }


  render() {

    return (
      <View style={styles.container}>

        <Icon name={"navicon"}
              style={styles.bar}
              onPress={() => this.props.navigation.openDrawer()}
        />

        <Text style={styles.welcome}>
          List Services SCREEN!
        </Text>

        <Text
          style={styles.instructions}
          onPress={this.handleGoToBookAppointment.bind(this, "PETAR")}
        >
          Book PETAR Appointment Screen...
        </Text>

        <Text
          style={styles.instructions}
          onPress={this.handleGoToBookAppointment.bind(this, "ASEN")}
        >
          Book ASEN Appointment Screen...
        </Text>

        <CustomTabBar
          navigation={this.props.navigation}
          isActive='tabOne'
        />

      </View>
    );
  }
}

ListServicesScreen.navigationOptions = {
  tabBarVisible: false,
};


const ELEMENT_HEIGHT = 430;
const spaceHeight = deviceHeight - (NAV_HEIGHT + TAB_HEIGHT + ELEMENT_HEIGHT);

const styles = StyleSheet.create({
  titleBox: {
    marginTop: spaceHeight * 0.12,
    paddingHorizontal: 27,
  },
  fullField: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: spaceHeight * 0.1,
  },
  colMainLeft: {
    flex: 1,
    marginRight: 8,
  },
  colMainRight: {
    flex: 1,
    marginLeft: 8,
  },
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
