'use strict';

import { TabNavigator, TabBarTop } from 'react-navigation'
import { DetailsScreen } from './views/DetailsScreen'
import { VKScreen } from './views/VKScreen'
import { MapScreen } from './views/MapScreen'

import {
  TabTopStyle
} from '../../../styles/Screen'

const routeConfiguration = {
  DetailsScreen: { screen: DetailsScreen },
  VKScreen: { screen: VKScreen },
  MapScreen: { screen: MapScreen },
};

const tabBarConfiguration = {
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  tabBarOptions: {
    ...TabTopStyle
  },
  initialRouteName: 'DetailsScreen',
};

export const NavigatorTabBarDetails = TabNavigator(routeConfiguration, tabBarConfiguration);
