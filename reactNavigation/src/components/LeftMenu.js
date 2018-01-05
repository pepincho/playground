import React, {
  Component
} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import CommonStyles from '../styles/CommonStyles';
import {
  deviceWidth,
  deviceHeight,
  colors,
  fontSize,
  // fontFamily,
} from '../styles/variables';

import { NavigationActions } from 'react-navigation'


const resetAction = (routeName) => NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({routeName: routeName, drawer: 'close'}),
  ]
});


class LeftMenu extends Component {
  constructor(props) {
    super(props);
  }

  onNavigate(route) {
    this.props.navigation.dispatch(resetAction(route))
  }

  render() {
    let isActive = ''; //this.state.isActive;

    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>

          <Text style={styles.name}>
            Petar Ivanov
          </Text>
          <Text style={styles.balance}>
            Balance: $1,359.00
          </Text>
        </View>

        <View style={styles.menu}>


          <TouchableHighlight
            underlayColor='#efefef'
            style={styles.itemBox}
            onPress={ this._handleClickHome.bind(this) }>
            <View style={styles.itemBox}>
              {
                (() => {
                  if (isActive == 'list_services') {
                    return (
                      <View style={styles.activeItem} />
                    )
                  }
                })()
              }
              <Text
                style={[
                  styles.menuText,
                  isActive == 'list_services' && styles.activeMenuText
                ]}
              >
                SERVICES
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor='#efefef'
            style={styles.itemBox}
            onPress={ this._handleClickDoctors.bind(this) }>
            <View style={styles.itemBox}>
              {
                (() => {
                  if (isActive == 'my_appointments') {
                    return (
                      <View style={styles.activeItem} />
                    )
                  }
                })()
              }
              <Text
                style={[
                  styles.menuText,
                  isActive == 'my_appointments' && styles.activeMenuText
                ]}
              >
                APPOINTMENTS
              </Text>
            </View>
          </TouchableHighlight>


        </View>
      </View>
    );
  }

  // PRIVATE
  _handleClickHome() {
    this.setState({isActive:'list_services'});
    this.props.navigation.navigate('ListServicesScreen');
    this.props.drawer.close()
  }

  // _handleClickDrug() {
  //   this.setState({isActive:'drug'});
  //   this.props.navigation.navigate('DrugScreen');
  //   this.props.drawer.close()
  // }

  _handleClickDoctors() {
    this.setState({isActive:'my_appointments'});
    this.props.navigation.navigate('AppointmentsScreen');
    this.props.drawer.close()
  }

  // _handleClickDashboard() {
  //   this.setState({isActive:'dashboard'});
  //   this.props.navigation.navigate('DashboardTestIndicatorsScreen');
  //   this.props.drawer.close()
  // }

  _handleClickProfile() {
    this.setState({isActive:'profile'});
    this.props.navigation.navigate('UserProfileScreen');
    this.props.drawer.close()
  }

  _handleClickServices() {
    this.setState({isActive:'list_services'});
    this.props.drawer.close()
  }

  // _handleClickNewHealthy() {
  //   this.setState({isActive:'newHealthy'});
  //   this.props.navigation.navigate('HealerBlogsScreen');
  //   this.props.drawer.close()
  // }
}

const ELEMENT_HEIGHT = 530;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth - 70,
    backgroundColor: '#fff',
  },
  userInfo: {
    height: 130,
    marginTop: spaceHeight * 0.46,
    marginBottom: spaceHeight * 0.35,
    paddingLeft: 30,
    paddingRight: 30,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 200,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.6)',
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowRadius: 5,
        shadowOpacity: 0.1
      },
      android: {
        elevation: 12,
      },
    }),
  },
  name: {
    marginTop: 15,
    marginBottom: 5,
    color: colors.black,
    fontSize: fontSize.itemHeader,
    // fontFamily: fontFamily.medium,
  },
  balance: {
    color: colors.lightGrey,
    fontSize: fontSize.small,
    // fontFamily: fontFamily.regular,
  },
  menu: {
    height: 400,
  },
  itemBox: {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
  },
  activeItem: {
    width: 5,
    height: 45,
    marginLeft: 0.2,
    backgroundColor: 'rgb(75,102,234)',
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 1
      },
      android: {
        elevation: 12,
      },
    }),
  },
  menuText: {
    marginLeft: 30,
    color: 'rgb(150,150,150)',
    fontSize: 15,
    // fontFamily: 'Poppins-Regular',
  },
  activeMenuText: {
    color: 'rgb(130,160,246)',
  },
});

export default LeftMenu;
