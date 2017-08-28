import React from 'react';
import { Text, ScrollView, ListView, View, StyleSheet } from 'react-native'

import { BasicScreen } from '../../styles/BasicScreen'
import { HeaderStyle } from '../../styles/Screen'

import {
  CLR_CATEGORY_BACKGROUND
} from '../../styles/Colors'

import {
  IOS_SHADOW_OPACITY,
  IOS_SHADOW_RADIUS
} from '../../styles/Constants'

import { CompanyMiniature } from './CatalogScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    margin: 5,
    borderRadius: 5,
    backgroundColor: CLR_CATEGORY_BACKGROUND,

    elevation: 2,
    shadowRadius: IOS_SHADOW_RADIUS,
    shadowOpacity: IOS_SHADOW_OPACITY,
  },
  list: {
    flex: 1,
    padding: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export const CompanyList = ({companies, navigation}) => {
  if (companies.length === 0) { return null; }
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(companies);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.innerContainer}>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={ds}
          renderRow={(el) => (<CompanyMiniature key={el.id} {...el} navigation={navigation}/>)}
        />
      </View>
    </ScrollView>
  )
};

export const ListCategoryScreen = ({navigation, screenProps}) => {
  const { id, name } = navigation.state.params.selectedCategory;
  const { companies } = screenProps;
  return (
    <BasicScreen>
      <Text>{name}</Text>
      <CompanyList companies={companies.filter(({categories}) => categories.includes(id))} navigation={navigation}/>
    </BasicScreen>
  );
};

ListCategoryScreen.navigationOptions = (props) => {
  return {
    ...HeaderStyle(props),
    title: 'Категория',
  }
};
