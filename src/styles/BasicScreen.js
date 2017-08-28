import React from 'react';
import { View, StatusBar  } from 'react-native';

import {
  CLR_SCREEN_BACKGROUND,
} from './Colors'

const s = {
  flex: 1,
  backgroundColor: CLR_SCREEN_BACKGROUND,
};
export const BasicScreen = ({style, children}) => (
  <View style={{...s, ...style}}>
    <StatusBar hidden/>
    {children}
  </View>
);
