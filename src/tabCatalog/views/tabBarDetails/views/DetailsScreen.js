import React from 'react';
import {
  View,
  ScrollView,
  Text,
  ListView,
  TouchableOpacity,
  Linking
} from 'react-native';

import { StyleSheet } from 'react-native'

import { BasicScreen } from '../../../../styles/BasicScreen'

import {
  IconEmail,
  IconWeb,
  IconVK,
  IconTwitter,
  IconFacebook,
  IconInstagram,
  IconOK,
  IconYoutube,
  IconPhone,
  IconOpenTime,
  IconLocation,
} from '../../../../styles/Icons'

import {
  CLR_VK_BACKGROUND
} from '../../../../styles/Colors'
import {
  IOS_SHADOW_OPACITY,
  IOS_SHADOW_RADIUS
} from '../../../../styles/Constants'


const styles = StyleSheet.create({
  socialLink: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  socialLinkBarContainer: {
    padding: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  detailsContainer: {
    flex:1,
    flexDirection:'row',
    padding:10,
  },
  detailsIconContainer: {
    justifyContent:'center',
    paddingRight:10,
  },
  detailsTextContainer: {
    justifyContent:'center',
  },
  detailsTextStyle: {
    fontFamily: 'Akrobat',
    fontWeight: 'bold',
  },
  detailsCommentStyle: {
    fontFamily: 'Akrobat',
    color:'gray',
  },

  detailsListContainer: {
    padding: 5,
  },

  descriptionBox: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  descriptionText: {
    fontFamily: 'Akrobat',
    padding: 5,
  },
});


const createHandleClick = (uri) => () => {
  Linking.canOpenURL(uri).then(supported => {
    if (supported) {
      Linking.openURL(uri);
    } else {
      console.log('Don\'t know how to open URI: ' + uri);
    }
  });
};


const SocialLink = ({type, url}) => {
  let icon;
  switch (type) {
    case 'email': icon = (<IconEmail/>); break;
    case 'web': icon = (<IconWeb/>); break;
    case 'vk': icon = (<IconVK/>); url = 'http://vk.com/' + url; break;
    case 'twitter': icon = (<IconTwitter/>); break;
    case 'facebook': icon = (<IconFacebook/>); break;
    case 'instagram': icon = (<IconInstagram/>); break;
    case 'ok': icon = (<IconOK/>); break;
    case 'youtube': icon = (<IconYoutube/>); break;
  }

  const handleClick = createHandleClick(url);

  return icon ? (
    <TouchableOpacity onPress={handleClick} style={styles.socialLink}>
      {icon}
    </TouchableOpacity>
  ) : null;
};

const SocialLinkBar = ({urls}) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(urls);
  return (
    <ListView
      contentContainerStyle={styles.socialLinkBarContainer}
      dataSource={ds}
      renderRow={(el) => (<SocialLink key={el.url} {...el}/>)}
    />
  );
};


const DetailsLink = ({icon, data, comment}) => (
  <View style={styles.detailsContainer}>
    <View style={styles.detailsIconContainer}>
      {icon}
    </View>
    <View style={styles.detailsTextContainer}>
      {data}
      {comment ? <Text style={styles.detailsCommentStyle}>{comment}</Text> : null}
    </View>
  </View>
);

const DetailsList = ({data, renderRow}) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(data);
  return (
    <ListView
      contentContainerStyle={styles.detailsListContainer}
      dataSource={ds}
      renderRow={renderRow}
    />
  );
};


const PhoneLink = ({phone, comment}) => {
  const handleClick = createHandleClick('tel:' + phone);

  return (
    <DetailsLink
      icon={<IconPhone/>}
      data={<TouchableOpacity onPress={handleClick}><Text style={styles.detailsTextStyle}>{phone}</Text></TouchableOpacity>}
      comment={comment}
    />
  );
};

const PhoneList = ({phones}) => {
  return (
    <DetailsList
      data={phones}
      renderRow={(el) => (<PhoneLink key={el.phone} {...el}/>)}
    />
  );
};


const OpenTime = ({time, comment}) => (
  <DetailsLink
    icon={<IconOpenTime/>}
    data={<Text style={styles.detailsTextStyle}>{time}</Text>}
    comment={comment ? <Text style={styles.detailsCommentStyle}>{comment}</Text> : null}
  />
);

const OpenTimeList = ({open_time}) => (
  <DetailsList
    data={open_time}
    renderRow={(el) => (<OpenTime key={el.time} {...el}/>)}
  />
);


const Location = ({address}) => (
  <DetailsLink
    icon={<IconLocation/>}
    data={<Text style={styles.detailsTextStyle}>{address}</Text>}
  />
);

const LocationList = ({locations}) => (
  <DetailsList
    data={locations}
    renderRow={(el) => (<Location key={el.address} {...el}/>)}
  />
);

const Description = ({description}) => (
  <View style={styles.descriptionBox}>
    <Text style={styles.descriptionText}>
      {description}
    </Text>
  </View>
);

const Divider = () => (
  <View style={{flex:1, backgroundColor:'#888', height:3, marginLeft: 10, marginRight: 10}}/>
);


export const DetailsScreen = ({screenProps}) => {
  const { id, companies } = screenProps;
  const company = companies.find((el) => el.id === id);
  return (
    <BasicScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        {company.description ? <Description {...company}/> : null}
        {company.description ? <Divider/> : null}
        {company.locations ? <LocationList {...company}/> : null}
        {company.open_time ? <OpenTimeList {...company}/> : null}
        {company.phones ? <PhoneList {...company}/> : null}
        {company.urls ? <SocialLinkBar {...company}/> : null}
      </ScrollView>
    </BasicScreen>
  );
};

DetailsScreen.navigationOptions = {
  tabBarLabel: 'Описание',
};
