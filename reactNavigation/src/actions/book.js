import { NavigationActions } from 'react-navigation';


// let _container;

import ListServicesScreen from '../screens/ListServicesScreen';


export const createAppointment = (baba) => {
  console.log("Hello boss");
  //
  console.log('baba .. ', baba)


  // const navigateAction = NavigationActions.navigate({
  //   routeName: 'list_services',
  //   params: {},
  //   action: NavigationActions.navigate({ routeName: 'list_services'})
  // })
  //
  // this.props.navigation.dispatch(navigateAction);

  baba.navigate('ListServicesScreen', {}, null);

  //
  // baba.dispatch(
  //   NavigationActions.navigate({
  //     type: 'Navigation/NAVIGATE',
  //     routeName: 'list_services',
  //     params,
  //   }),
  // );

};
