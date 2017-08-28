'use strict';

import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabBarDetails } from '../navigationConfiguration'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabBarDetails,
    companies: state.companies.companies,
  }
};

class TabBarDetailsNavigation extends React.Component {
  render(){
    const { dispatch, navigationState, companies, id } = this.props;
    return (
      <NavigatorTabBarDetails
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
        screenProps={{
          id: id,
          companies: companies,
        }}
      />
    )
  }
}

export default connect(mapStateToProps)(TabBarDetailsNavigation)
