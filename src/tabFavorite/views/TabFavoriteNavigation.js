'use strict';

import React from 'react'

import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabFavorite } from '../navigationConfiguration'

import { connect } from 'react-redux'

import { IconLinkToFavoriteScreen } from '../../styles/Icons'

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabFavorite,
    favoriteState: state.favorite,
    companies: state.companies.companies,
  }
};
class TabFavoriteNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Избранное',
    tabBarIcon: ({ tintColor }) => <IconLinkToFavoriteScreen color={ tintColor }/>
  };

  render(){
    const { dispatch, navigationState, favoriteState, companies } = this.props;
    return (
      <NavigatorTabFavorite
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
        screenProps={{
          favorite: favoriteState,
          companies: companies,
        }}
      />
    )
  }
}

export default connect(mapStateToProps)(TabFavoriteNavigation);
