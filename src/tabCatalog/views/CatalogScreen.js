import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import CachedImage from 'react-native-cached-image';

import { BasicScreen } from '../../styles/BasicScreen'

import {
  IconMore,
} from '../../styles/Icons'
import {
  HeaderStyle
} from '../../styles/Screen'
import {
  CLR_SCREEN_BACKGROUND,
  CLR_CAROUSEL_BACKGROUND,
  CLR_LABEL_BACK,
  CLR_DISCOUNT_TEXT,
  CLR_FULL_TRANSPARENT,
} from '../../styles/Colors'

import {
  IOS_SHADOW_OPACITY,
  IOS_SHADOW_RADIUS,
  SMALL_PADDING_SIZE,
  NORMAL_PADDING_SIZE,
  FONT_SIZE_LABEL,
  BORDER_RADIUS,
  BORDER_RADIUS_LARGE,
} from '../../styles/Constants'
import { loadRemoteData } from '../../state/DataReducer'


const styles = StyleSheet.create({
  companyMiniatureContainer: {
    padding: SMALL_PADDING_SIZE,
  },
  companyMiniatureImage: {
    flex:1,
    width: null,
    height: null,
  },
  companyMiniatureDiscountContainerOuter: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  companyMiniatureDiscountContainerInner: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  companyMiniatureDiscountText: {
    elevation: 1,
    padding: 3,
    margin: 3,
    borderRadius: BORDER_RADIUS_LARGE,
    backgroundColor : CLR_LABEL_BACK,
    color: CLR_DISCOUNT_TEXT,
    fontSize: FONT_SIZE_LABEL,
    textAlign: 'right',
    fontFamily: 'Akrobat',
    fontWeight: 'bold',
  },
  companyMiniatureText: {
    textAlign: 'center',
    fontFamily: 'Akrobat',
  },

  companyCarouselContainer: {
    backgroundColor: CLR_CAROUSEL_BACKGROUND,
    margin: SMALL_PADDING_SIZE,
    marginBottom: 0,
    borderRadius: BORDER_RADIUS,

    elevation: 2,
    shadowRadius: IOS_SHADOW_RADIUS,
    shadowOpacity: IOS_SHADOW_OPACITY,
  },
  companyCarouselHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: NORMAL_PADDING_SIZE,
    paddingTop: NORMAL_PADDING_SIZE,
  },
  companyCarouselText: {
    fontFamily: 'Akrobat',
    fontWeight: 'bold',
    fontSize: FONT_SIZE_LABEL,
  }
});

const s = {height: 120, width: 120};
export const CompanyMiniature = ({id, name, discount, images, navigation}) => (
  <View style={styles.companyMiniatureContainer}>
    <TouchableOpacity
      style={{...s, backgroundColor: CLR_FULL_TRANSPARENT}}
      onPress={()=> navigation.dispatch({type:'JUMP_TO_COMPANY_CARD', payload:{id:id}})}
    >
      {images && images.logo ? (
        <CachedImage style={styles.companyMiniatureImage} borderRadius={BORDER_RADIUS} source={{uri: images.logo}}>
          {discount ? (
            <View style={styles.companyMiniatureDiscountContainerOuter}>
              <View style={styles.companyMiniatureDiscountContainerInner}>
                <Text style={styles.companyMiniatureDiscountText}>
                  -{discount}%
                </Text>
              </View>
            </View>
          ) : null }
        </CachedImage>
      ) : null}
    </TouchableOpacity>
    <View style={{width: 120}}>
      <Text numberOfLines={2} style={styles.companyMiniatureText}>{name}</Text>
    </View>
  </View>
);

export const CompanyCarousel = ({id, name, companies, navigation}) => {
  return(
    <View style={styles.companyCarouselContainer}>
      <TouchableOpacity
        style={styles.companyCarouselHeader}
        onPress={()=> navigation.dispatch({type:'JUMP_TO_CATEGORY_LIST', payload:{id:id, name:name}})}
      >
        <Text style={styles.companyCarouselText}>{name}</Text>
        <IconMore size={16}/>
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {companies.map((el) => (<CompanyMiniature navigation={navigation} key={el.id} {...el}/>))}
      </ScrollView>
    </View>
  )
};

export const CatalogScreen = ({ navigation, screenProps: { companies, categories, refreshing } }) => {
  return (
    <BasicScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={()=> navigation.dispatch(loadRemoteData())}
          />
        }
      >
        {categories.map(({id, name})=>(
          <CompanyCarousel
            key={id}
            id={id}
            name={name}
            navigation={navigation}
            companies={companies.filter(({categories}) => categories.includes(id))}
          />
        ))}
      </ScrollView>
    </BasicScreen>
  );
};

CatalogScreen.navigationOptions = (props) => {
  return {
    ...HeaderStyle(props),
    title: 'Каталог',
  };
};
