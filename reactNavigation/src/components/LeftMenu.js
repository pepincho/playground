import React, {
  Component
} from 'react';
import {
  View,
  // Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
// import ImagesUrl from '../static/Images';
const { width, height } = Dimensions.get('window');

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
    // const imgUrl = this.props.navigation.state.routes[0].routeName === "Home" ? ImagesUrl.bgOne :
    //   this.props.navigation.state.routes[0].routeName === "Profile" ? ImagesUrl.bgTwo : ImagesUrl.bgThree;

    return (
      <View style={styles.container}>

        <View style={styles.profile}>
          <View style={styles.group}>
            <View style={styles.imgWrapper}>

            </View>
            <Icon
              name={"gear"}
              style={styles.settings}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Petar Ivanov</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.col}
            onPress={ () => {} }
            activeOpacity={0.6}
          >
            <Icon
              name={"archive"}
              style={styles.icon}
            />
            <Text style={styles.menuTxt}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.col}
            onPress={ () => this.onNavigate('ListServicesScreen') }
            activeOpacity={0.6}
          >
            <Icon
              name={"user"}
              style={styles.icon}
            />
            <Text style={styles.menuTxt}>Services</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.col, {borderBottomWidth: 1}]}
            onPress={ () => this.onNavigate('AppointmentsScreen') }
            activeOpacity={0.6}
          >
            <Icon
              name={"trophy"}
              style={styles.icon}
            />
            <Text style={styles.menuTxt}>Appointments</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingLeft: 30
  },
  profile: {
    marginLeft: width * 0.16,
    marginTop: 50
  },
  group: {
    flexDirection: "row",
    alignItems: "center"
  },
  imgWrapper: {
    width: 129,
    height: 129,
    borderWidth: 2,
    borderRadius: 120,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  settings: {
    fontSize: 30,
    color: "black",
    marginLeft: 15
  },
  profilePic: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
  },
  imgBg: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height
  },
  icon: {
    fontSize: 45,
    color: "black"
  },
  col: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: "#fff"
  },
  menuTxt: {
    fontSize: 16,
    color: "black",
    paddingLeft: 10
  },
  profileInfo: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  name: {
    fontSize: 18,
    color: "black"
  }
});

export default LeftMenu;
