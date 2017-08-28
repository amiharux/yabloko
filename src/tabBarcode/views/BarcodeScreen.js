import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Barcode from 'react-native-barcode-builder';

import {
  CLR_SCREEN_BACKGROUND,
} from '../../styles/Colors'

import { BasicScreen } from '../../styles/BasicScreen'
import { HeaderStyle } from '../../styles/Screen'

const styles = StyleSheet.create({
  topLabelStyle: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Akrobat',
    color:'gray',
  },
  topTextStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Akrobat',
    color:'gray',
  },

  barCodeTextStyle: {
    textAlign: 'center',
    fontSize: 20,
  },

  bottomTextStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Akrobat',
    color:'gray',
  },
});

export const BarcodeScreen = ({screenProps:{barcodeValue}}) => (
  <BasicScreen>
    <View style={{flex: 2, justifyContent: 'center', marginLeft: 20, marginRight: 20}}>
      <View style={{justifyContent: 'center', alignItems: 'center',}}>
        <Image style={{width:70, height:70}} source={require('../../../assets/icons/Яблоко_logo-03.png')}/>
      </View>
      <Text style={styles.topLabelStyle}>
        #скидкитут
      </Text>
      <Text style={styles.topTextStyle}>
        все скидки в одном приложении
      </Text>
    </View>
    <View style={{flex: 2, marginLeft: 20, marginRight: 20, justifyContent: 'center'}}>
      <Barcode
        background={CLR_SCREEN_BACKGROUND}
        value={barcodeValue}
        format='CODE128'
      />
      <Text style={styles.barCodeTextStyle}>{barcodeValue}</Text>
    </View>
    <View style={{flex: 2, justifyContent: 'center', marginLeft: 20, marginRight: 20}}>
      <Text style={styles.bottomTextStyle}>
        Покажите этот штрих-код при оплате товара или услуги и получите максимальную скидку у наших партнеров
      </Text>
    </View>
  </BasicScreen>
);

BarcodeScreen.navigationOptions = (props) => {
  return {
    ...HeaderStyle(props),
    title: 'Штрих-код',
  };
};
