'use strict';

import React from 'react'

import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabCatalog } from '../navigationConfiguration'

import { connect } from 'react-redux'

import { IconLinkToCatalogScreen } from '../../styles/Icons'

import { setFavorite, unsetFavorite } from '../../state/FavoriteReducer';


const mapStateToProps = (state) => {
  return {
    navigationState: state.tabCatalog,
    favoriteState: state.favorite,
    companies: state.companies.companies,
    categories: state.companies.categories,
    refreshing: state.companies.refreshing,
  }
};

const TabCatalogNavigation = ({navigationState, favoriteState, dispatch, companies, categories, refreshing}) => {
  return (
    <NavigatorTabCatalog
      navigation={
        addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState,
          setFavorite: (id) => dispatch(setFavorite(id)),
          unsetFavorite: (id) => dispatch(unsetFavorite(id)),
        })
      }
      screenProps={{
        favorite: favoriteState,
        companies: companies,
        categories: categories,
        refreshing: refreshing,
      }}
    />
  );
};

TabCatalogNavigation.navigationOptions = {
  tabBarLabel: 'Каталог',
  tabBarIcon: ({ tintColor }) => <IconLinkToCatalogScreen color={ tintColor }/>
};

export default connect(mapStateToProps)(TabCatalogNavigation)
