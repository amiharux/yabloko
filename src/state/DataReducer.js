import { AsyncStorage, Image } from 'react-native';

const EMPTY_DATA = {
  companies: [],
  categories: [],
  refreshing: false,
};

export const dataReducer = (state=EMPTY_DATA, action) => {
  if (action.type === 'START_LOADING_DATA') {
    return { ...state, refreshing: true };
  }
  else if (action.type === 'RESET_DATA') {
    return { ...state, ...action.payload, refreshing:false };
  }
  return state;
};

const preloadImages = (companies) => {
  const ans = [];
  companies.forEach((company) => {
    ans.push(
      Image.prefetch(company.images.logo),
      Image.prefetch(company.images.full)
    );
  });
  return ans;
};

export const loadLocalData = () => {
  return async (dispatch) => {
    const value = await AsyncStorage.getItem('companyData');
    if (value && value.length) {
      const parsed = JSON.parse(value);
      dispatch({type:'RESET_DATA', payload:parsed});
      // await preloadImages(parsed.companies);
    }
  }
};

export const loadRemoteData = () => {
  return async (dispatch) => {
    try {
      dispatch({type: 'START_LOADING_DATA'});
      const response = await fetch('http://yabloko-nsk.ru/assets/mobile/yabloko-green-companies.json');
      const parsed = await response.json();
      dispatch({type: 'RESET_DATA', payload: parsed});
      // await preloadImages(parsed.companies);
      AsyncStorage.setItem('companyData', JSON.stringify(parsed))
    } catch (error) {
      console.error(error);
    }
  }
};
