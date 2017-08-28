import React from 'react';

import { BasicScreen } from '../../styles/BasicScreen'
import { HeaderStyle } from '../../styles/Screen'

import { CompanyList } from './ListCategoryScreen'

export const SearchResultScreen = ({navigation, screenProps}) => {
  const { query } = navigation.state.params;
  const { companies } = screenProps;
  return (
    <BasicScreen>
      <CompanyList
        companies={companies.filter(({name})=>name.toLowerCase().includes(query.toLowerCase()))}
        navigation={navigation}
      />
    </BasicScreen>
  );
};

SearchResultScreen.navigationOptions = (props) => {
  return {
    ...HeaderStyle(props),
    title: 'Поиск',
  }
};
