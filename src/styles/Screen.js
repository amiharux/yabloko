import React from 'react';
import { StyleSheet, } from 'react-native';

import {
  CLR_SCREEN_BACKGROUND,
  CLR_HEADER_TEXT,
  CLR_HEADER_BACKGROUND,

  CLR_MENU_ICON_SELECTED,
  CLR_MENU_ICON_NOT_SELECTED,
  CLR_MENU_BACKGROUND_NOT_SELECTED,
  CLR_MENU_BACKGROUND_SELECTED
} from './Colors'

import {
  SearchBox
} from '../searchBox/searchBox'

export const HeaderStyle = (props) => {
  return {
    headerTintColor: CLR_HEADER_TEXT,
    headerStyle: {
      backgroundColor: CLR_HEADER_BACKGROUND,
    },
    headerTitleStyle: {
      fontFamily: 'Akrobat',
    },
    headerRight: (<SearchBox {...props}/>),
  };
};

export const TabTopStyle = {
  activeTintColor: CLR_MENU_ICON_SELECTED,
  inactiveTintColor: CLR_MENU_ICON_NOT_SELECTED,
  style: {
    backgroundColor: CLR_MENU_BACKGROUND_NOT_SELECTED,
  },
  indicatorStyle: {
    borderBottomWidth: 100,
    borderBottomColor: CLR_MENU_BACKGROUND_SELECTED,
    opacity: 1,
  },
  labelStyle: {
    fontFamily: 'Akrobat',
    fontSize: 12,
  },
};

export const TabBottomStyle = {
  activeTintColor: CLR_MENU_ICON_SELECTED,
  inactiveTintColor: CLR_MENU_ICON_NOT_SELECTED,
  activeBackgroundColor : CLR_MENU_BACKGROUND_SELECTED,
  inactiveBackgroundColor : CLR_MENU_BACKGROUND_NOT_SELECTED,
  labelStyle: {
    fontFamily: 'Akrobat',
  },
};
