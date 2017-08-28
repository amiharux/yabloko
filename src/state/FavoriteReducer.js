import { AsyncStorage } from 'react-native';

export const favoriteReducer = (state=[], action) => {
  if (action.type === 'RESET_FAVORITES') {
    return action.payload;
  }

  if (action.type === 'SET_FAVORITE') {
  	const {id} = action.payload;
  	return state.includes(id) ? state : [...state, id];
  }

  if (action.type === 'UNSET_FAVORITE') {
  	const {id} = action.payload;
  	return state.includes(id) ? state.filter((v)=>v!=id) : state;
  }

  return state;
};

export const loadLocalFavorites = () => {
  return async (dispatch) => {
    const value = await AsyncStorage.getItem('favoriteData');
    if (value && value.length) {
      dispatch({type:'RESET_FAVORITES', payload:JSON.parse(value)});
    }
  }
};

const getCurrentData = async () => {
  const value = await AsyncStorage.getItem('favoriteData');
  if (value && value.length) {
    return JSON.parse(value);
  } else {
    return [];
  }
};

export const setFavorite = (id) => {
  return async (dispatch) => {
    dispatch({type: 'SET_FAVORITE', payload:{id: id}});

    const value = await getCurrentData();
    AsyncStorage.setItem('favoriteData', JSON.stringify([...value, id]))
  }
};

export const unsetFavorite = (id) => {
  return async (dispatch) => {
  	dispatch({type: 'UNSET_FAVORITE', payload:{id: id}});

    const value = await getCurrentData();
    AsyncStorage.setItem('favoriteData', JSON.stringify(value.filter((v)=>v!=id)));
  }
}
