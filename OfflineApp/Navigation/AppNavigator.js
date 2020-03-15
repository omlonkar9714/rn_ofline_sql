// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// import Screen1 from '../screens/Screen1';
// import Screen2 from '../screens/Screen2';
// import Screen3 from '../screens/Screen3';

// const AppNavigator = createStackNavigator(
//   {
//     Screen1: {
//       screen: Screen1,
//       navigationOptions: {headerShown: false},
//     },
//     Screen2: {
//       screen: Screen2,
//       navigationOptions: {headerShown: false},
//     },
//     Screen3: {
//       screen: Screen3,
//       navigationOptions: {headerShown: false},
//     },
//   },
//   {initialRouteName: 'Screen1'},
// );

// const App1 = createAppContainer(AppNavigator);

// export default App1;

//

/*Example of SQLite Database in React Native*/
import React from 'react';
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import RegisterUser from '../screens/RegisterUser';
import UpdateUser from '../screens/UpdateUser';
import ViewUser from '../screens/ViewUser';
import ViewAllUser from '../screens/ViewAllUser';
import DeleteUser from '../screens/DeleteUser';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: {backgroundColor: '#f50'},
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: {backgroundColor: '#f50'},
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: {backgroundColor: '#f50'},
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: {backgroundColor: '#f50'},
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: {backgroundColor: '#f50'},
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: {backgroundColor: '#f50'},
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);
