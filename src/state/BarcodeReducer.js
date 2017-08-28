import { AsyncStorage, Image } from 'react-native';

export const barcodeReducer = (state='111111112111111', action) => {
  if (action.type === 'RESET_BARCODE') {
    return action.payload;
  }
  return state;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const initLocalBarcode = () => {
  return async (dispatch) => {
    let value = await AsyncStorage.getItem('barcodeData');
    if (!value || !value.length) {
      value = '11111111' + getRandomInt(20000000, 99999999);
      AsyncStorage.setItem('barcodeData', value);
    }
    dispatch({type:'RESET_BARCODE', payload:value});
  }
};
