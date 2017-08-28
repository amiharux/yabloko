'use strict';

import { TabNavigator, TabBarBottom } from 'react-navigation'

import {
  TabBottomStyle
} from '../styles/Screen'


import TabCatalogNavigation from '../tabCatalog/views/TabCatalogNavigation'
import TabBarcodeNavigation from '../tabBarcode/views/TabBarcodeNavigation'
import TabFavoriteNavigation from '../tabFavorite/views/TabFavoriteNavigation'


const routeConfiguration = {
  TabCatalogNavigation: { screen: TabCatalogNavigation },
  TabBarcodeNavigation: { screen: TabBarcodeNavigation },
  TabFavoriteNavigation: { screen: TabFavoriteNavigation },
};

const tabBarConfiguration = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: { ...TabBottomStyle },
  initialRouteName: 'TabBarcodeNavigation',
};

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration)

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_COMPANY_CARD') {
    return {...state, index: 0}
  } else if (action.type === 'JUMP_TO_CATEGORY_LIST') {
    return {...state, index: 0}
  } else if (action.type === 'JUMP_TO_SEARCH_RESULT') {
    return {...state, index: 0}
  } else if (action.type === 'Navigation/BACK') {
    return state;
  }
  return TabBar.router.getStateForAction(action,state)
};
