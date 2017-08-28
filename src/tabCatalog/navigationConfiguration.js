'use strict';

import { StackNavigator, NavigationActions } from 'react-navigation'

import { CatalogScreen } from './views/CatalogScreen'
import { ListCategoryScreen } from './views/ListCategoryScreen'
import { CompanyDetailsScreen } from './views/CompanyDetailsScreen'
import { SearchResultScreen } from './views/SearchResultScreen'

const routeConfiguration = {
  CatalogScreen: { screen: CatalogScreen },
  ListCategoryScreen: { screen: ListCategoryScreen },
  CompanyDetailsScreen: { screen: CompanyDetailsScreen },
  SearchResultScreen: { screen: SearchResultScreen },
};


// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'CatalogScreen'
};

export const NavigatorTabCatalog = StackNavigator(routeConfiguration, stackNavigatorConfiguration);

export const navigatorTabCatalogReducer = (state,action) => {
  if (action.type === 'JUMP_TO_COMPANY_CARD') {
    action = { ...action, ...NavigationActions.navigate({
      routeName: 'CompanyDetailsScreen',
      params: { selectedCompany: state.selectedCompany }
    }) };
  } else if (action.type === 'JUMP_TO_CATEGORY_LIST') {
    action = { ...action, ...NavigationActions.navigate({
      routeName: 'ListCategoryScreen',
      params: { selectedCategory: state.selectedCategory }
    }) };
  } else if (action.type === 'JUMP_TO_SEARCH_RESULT') {
    action = { ...action, ...NavigationActions.navigate({
      routeName: 'SearchResultScreen',
      params: { query: state.searchQuery }
    }) };
  } else if (action.type === 'CATALOG_GO_BACK') {
    action = { ...action, ...NavigationActions.back({}) };
  }
  return NavigatorTabCatalog.router.getStateForAction(action,state)
};
