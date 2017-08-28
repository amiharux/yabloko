'use strict';

import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { navigatorTabCatalogReducer } from '../tabCatalog/navigationConfiguration'
import { NavigatorTabBarDetails } from '../tabCatalog/views/tabBarDetails/navigationConfiguration'
import { NavigatorTabBarcode } from '../tabBarcode/navigationConfiguration'
import { NavigatorTabFavorite } from '../tabFavorite/navigationConfiguration'
import { tabBarReducer } from '../tabBar/navigationConfiguration'

import { rootPreReducer, rootPostReducer } from './RootReducer'
import { favoriteReducer } from './FavoriteReducer'
import { dataReducer } from './DataReducer'
import { barcodeReducer } from './BarcodeReducer'

const levelReducers = combineReducers({
  tabBar: tabBarReducer,

  tabCatalog: navigatorTabCatalogReducer,
  tabBarDetails: (state,action) => NavigatorTabBarDetails.router.getStateForAction(action,state),
  tabBarcode: (state,action) => NavigatorTabBarcode.router.getStateForAction(action,state),
  tabFavorite: (state,action) => NavigatorTabFavorite.router.getStateForAction(action,state),

  favorite: favoriteReducer,
  companies: dataReducer,
  barcode: barcodeReducer,
});

export default createStore(
  (state, action) => rootPostReducer(levelReducers(rootPreReducer(state, action), action), action),
  applyMiddleware(thunk),
)
