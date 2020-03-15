import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AppNavigator from './Navigation/AppNavigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppNavigator />;
  }
}
