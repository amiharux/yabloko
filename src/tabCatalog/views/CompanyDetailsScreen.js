import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import CachedImage from 'react-native-cached-image'

import TabBarDetailsNavigation from './tabBarDetails/views/TabBarDetailsNavigation'

import { BasicScreen } from '../../styles/BasicScreen'
import { HeaderStyle } from '../../styles/Screen'

import {
  CLR_NO_LOGO,
  CLR_WHITE_TRANSPARENT,
  CLR_FAVORITE_ICON,
} from '../../styles/Colors'

import {
  IconFavorite,
  IconNotFavorite,
} from '../../styles/Icons'

import {
  SMALL_PADDING_SIZE,
  NORMAL_PADDING_SIZE,
  BORDER_RADIUS,
} from '../../styles/Constants'

const styles = StyleSheet.create({
  image: {
    flex:1,
    width: null,
    height: null,
  },
  imagePlaceholder: {
    flex: 1,
    backgroundColor: CLR_NO_LOGO,
  },
  headerContainerOuter: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerContainerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  companyName: {
    fontSize: 20,
    fontFamily: 'Akrobat',
    backgroundColor: CLR_WHITE_TRANSPARENT,
    padding: SMALL_PADDING_SIZE,
    borderTopRightRadius: BORDER_RADIUS,
  },
  discount: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: CLR_WHITE_TRANSPARENT,
    padding: 5,
    borderTopLeftRadius: BORDER_RADIUS,
  },
  bodyContainer: {
    flex: 2
  },
  favoriteContainer: {
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  favoriteTouchable: {
    backgroundColor: CLR_WHITE_TRANSPARENT,
    padding: SMALL_PADDING_SIZE,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
});

const ImageOrColor = ({image, children}) => {
  return image
    ? <CachedImage style={styles.image} source={{uri: image}}>{children}</CachedImage>
    : <View style={styles.imagePlaceholder}>{children}</View>;
};

export const CompanyDetailsScreen = ({navigation, screenProps}) => {
  const { state, setFavorite, unsetFavorite } = navigation;
  const el = screenProps.companies.find(({id}) => id === state.params.selectedCompany.id);
  const { id, name, discount, images } = el;
  const isFavorite = screenProps.favorite.includes(id);
  return (
    <BasicScreen>
      <ImageOrColor image={images ? images.full : null}>
        <View style={styles.favoriteContainer}>
          <TouchableOpacity 
            onPress={ () => {isFavorite ? unsetFavorite(id) : setFavorite(id)} } 
            style={styles.favoriteTouchable}
          >
            {
              isFavorite
              ? <IconFavorite color={CLR_FAVORITE_ICON}/>
              : <IconNotFavorite color={CLR_FAVORITE_ICON}/>
            }
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainerOuter}>
          <View style={styles.headerContainerInner}>
            <Text style={styles.companyName}>{name}</Text>
            {discount ? (
              <Text style={styles.discount}>
                -{discount}%
              </Text>) : null
            }
          </View>
        </View>
      </ImageOrColor>
      <View style={styles.bodyContainer}>
        <TabBarDetailsNavigation id={id}/>
      </View>
    </BasicScreen>
  );
};

CompanyDetailsScreen.navigationOptions = (props) => {
  return {
    ...HeaderStyle(props),
    title: 'Инфо'
  }
};
