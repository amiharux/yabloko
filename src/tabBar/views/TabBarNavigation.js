'use strict';

import React from 'react'

import { BackHandler, View } from 'react-native'

import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { TabBar } from '../navigationConfiguration'

import { connect } from 'react-redux'

import { loadLocalFavorites } from '../../state/FavoriteReducer'
import { loadRemoteData, loadLocalData } from '../../state/DataReducer'
import { initLocalBarcode } from '../../state/BarcodeReducer'

const mapStateToProps = (state) => {
 return {
   navigationState: state.tabBar,
 }
};

class TabBarNavigation extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    await this.props.dispatch(loadLocalFavorites());
    await this.props.dispatch(loadLocalData());
    this.props.dispatch(initLocalBarcode());
    this.props.dispatch(loadRemoteData());

    this.setState({ fontLoaded: true });
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, navigationState } = this.props;
    if (navigationState.index === 0) {
      dispatch({type: 'CATALOG_GO_BACK'});
      return true;
    }
    dispatch(NavigationActions.back());
    return true;
  };
  render(){
    const { dispatch, navigationState } = this.props;
    if (this.state.fontLoaded) {
      return (
        <TabBar
          navigation={
            addNavigationHelpers({
              dispatch: dispatch,
              state: navigationState,
            })
          }
        />
      )
    } else {
      return <View/>;
    }
  }
}

export default connect(mapStateToProps)(TabBarNavigation)
