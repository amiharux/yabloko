import React from 'react';

import { BasicScreen } from '../../styles/BasicScreen'
import { HeaderStyle } from '../../styles/Screen'

import { CompanyList } from '../../tabCatalog/views/ListCategoryScreen'

export const FavoriteScreen = ({navigation, screenProps}) => (
  <BasicScreen>
    <CompanyList
      companies={screenProps.companies.filter(({id})=>screenProps.favorite.includes(id))}
      navigation={navigation}
    />
  </BasicScreen>
);

FavoriteScreen.navigationOptions = (props) => {
  return {
    ...HeaderStyle(props),
    title: 'Избранное',
  }
};
