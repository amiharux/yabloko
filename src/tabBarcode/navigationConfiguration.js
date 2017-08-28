'use strict';

import { StackNavigator } from 'react-navigation'
import { BarcodeScreen } from './views/BarcodeScreen'

const routeConfiguration = {
  BarcodeScreen: { screen: BarcodeScreen },
};

const stackNavigatorConfiguration = {
  // headerMode: 'screen',
  initialRoute: 'BarcodeScreen',
};

export const NavigatorTabBarcode = StackNavigator(routeConfiguration,stackNavigatorConfiguration);
