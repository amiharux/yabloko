'use strict';

import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabBarcode } from '../navigationConfiguration'

import { connect } from 'react-redux'
import { IconLinkToBarcodeScreen } from '../../styles/Icons'

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabBarcode,
    barcodeValue: state.barcode,
  }
};

class TabBarcodeNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Штрих-код',
    tabBarIcon: ({ tintColor }) => <IconLinkToBarcodeScreen color={tintColor}/>,
  };

  render(){
    const { dispatch, navigationState, barcodeValue } = this.props;
    return (
      <NavigatorTabBarcode
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
        screenProps={{
          barcodeValue: barcodeValue,
        }}
      />
    )
  }
}

export default connect(mapStateToProps)(TabBarcodeNavigation)
