import React, {Component} from 'react';
import { Image } from 'react-native';

import PrimeTabBar from '../elements/PrimeTabBar';

export default class CustomTabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PrimeTabBar
        isActive={this.props.isActive}

        tabOneBtn={{
          active: require('../../img/activeDrugs.png'),
          inactive: require('../../img/drugs.png'),
          width: 24,
          height: 24,
          action: this._onDrugsIconClick.bind(this),
        }}
        tabTwoBtn={{
          active: require('../../img/activeDoctors.png'),
          inactive: require('../../img/doctors.png'),
          width: 18,
          height: 24,
          action: this._onDoctorsIconClick.bind(this),
        }}
        tabThreeBtn={{
          active: require('../../img/activeDashboard.png'),
          inactive: require('../../img/dashboard.png'),
          width: 24,
          height: 20,
          action: this._onDashboardIconClick.bind(this),
        }}
        tabFourBtn={{
          active: require('../../img/activeProfile.png'),
          inactive: require('../../img/profile.png'),
          width: 20,
          height: 24,
          action: this._onProfileIconClick.bind(this),
        }}
      />
    );
  }

  // Handle click buttons of tabbar
  // _onHomeIconClick() {
  //   this.props.navigation.navigate('ListServicesScreen');
  // }

  _onDrugsIconClick() {
    this.props.navigation.navigate('ListServicesScreen');
  }

  _onDoctorsIconClick() {
    this.props.navigation.navigate('AppointmentsScreen');
  }

  _onDashboardIconClick() {
    this.props.navigation.navigate('SalonInfoScreen');
  }

  _onProfileIconClick() {
    this.props.navigation.navigate('UpdateProfileScreen');
  }
}
