'use strict';
import { StackNavigator } from 'react-navigation'

import { FavoriteScreen } from './views/FavoriteScreen'

const routeConfiguration = {
  FavoriteScreen: { screen: FavoriteScreen },
};

const stackNavigatorConfiguration = {
  // headerMode: 'none',
  initialRoute: 'TabThreeScreenOne'
};

export const NavigatorTabFavorite = StackNavigator(routeConfiguration,stackNavigatorConfiguration);
