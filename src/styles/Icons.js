import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Zocial from 'react-native-vector-icons/Zocial'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {
  MENU_ICON_SIZE,
  SOCIAL_ICON_SIZE,
} from './Constants'

// https://expo.github.io/vector-icons/
export const IconLinkToCatalogScreen = (props) => (<MaterialCommunityIcons size={MENU_ICON_SIZE} {...props} name='view-grid'/>);
export const IconLinkToBarcodeScreen = (props) => (<FontAwesome size={MENU_ICON_SIZE} {...props} name='barcode'/>);
export const IconLinkToFavoriteScreen = (props) => (<MaterialIcons size={MENU_ICON_SIZE} {...props} name='favorite'/>);
export const IconMore = (props) => (<Entypo size={MENU_ICON_SIZE} {...props} name='chevron-right'/>);

export const IconEmail = (props) => (<Entypo size={SOCIAL_ICON_SIZE} {...props} name='email'/>);
export const IconWeb = (props) => (<MaterialCommunityIcons size={SOCIAL_ICON_SIZE} {...props} name='web'/>);
export const IconVK = (props) => (<FontAwesome size={SOCIAL_ICON_SIZE} {...props} name='vk'/>);
export const IconTwitter = (props) => (<FontAwesome size={SOCIAL_ICON_SIZE} {...props} name='twitter'/>);
export const IconFacebook = (props) => (<FontAwesome size={SOCIAL_ICON_SIZE} {...props} name='facebook-square'/>);
export const IconInstagram = (props) => (<FontAwesome size={SOCIAL_ICON_SIZE} {...props} name='instagram'/>);
export const IconOK = (props) => (<FontAwesome size={SOCIAL_ICON_SIZE} {...props} name='odnoklassniki'/>);
export const IconYoutube = (props) => (<FontAwesome size={SOCIAL_ICON_SIZE} {...props} name='youtube'/>);

export const IconPhone = (props) => (<MaterialIcons size={SOCIAL_ICON_SIZE} {...props} name='phone'/>);
export const IconOpenTime = (props) => (<MaterialIcons size={SOCIAL_ICON_SIZE} {...props} name='access-time'/>);
export const IconLocation = (props) => (<Entypo size={SOCIAL_ICON_SIZE} {...props} name='location'/>);

export const IconSearch = (props) => (<MaterialIcons size={MENU_ICON_SIZE} {...props} name='search'/>);

export const IconFavorite = (props) => (<MaterialIcons size={MENU_ICON_SIZE} {...props} name='favorite'/>);
export const IconNotFavorite = (props) => (<MaterialIcons size={MENU_ICON_SIZE} {...props} name='favorite-border'/>);
