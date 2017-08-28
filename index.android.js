import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux'

import Store from './src/state/Store';
import TabBarNavigation from './src/tabBar/views/TabBarNavigation'

export default class yabloko extends Component {
  render() {
    return (
      <Provider store={Store}>
        <TabBarNavigation/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('yabloko', () => yabloko);
