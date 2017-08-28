import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking
} from 'react-native';

import { BasicScreen } from '../../../../styles/BasicScreen'

import {
  CLR_VK_BACKGROUND
} from '../../../../styles/Colors'
import {
  IOS_SHADOW_OPACITY,
  IOS_SHADOW_RADIUS
} from '../../../../styles/Constants'

const styles = StyleSheet.create({
  elementBox: {
    backgroundColor: CLR_VK_BACKGROUND,
    margin: 5,
    padding: 5,
    marginBottom: 0,
    borderRadius: 5,

    elevation: 2,
    shadowRadius: IOS_SHADOW_RADIUS,
    shadowOpacity: IOS_SHADOW_OPACITY,
  },
  elementText: {
    fontFamily: 'Akrobat',
  }
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

const NewsElement = ({text, url}) => {
  return (
    <TouchableOpacity onPress={createHandleClick(url)} style={styles.elementBox}>
      <Text style={styles.elementText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const get_item_data = ({baseUrl, id, owner_id, text, copy_history}) => {
  const my_text = text
    ? text
    : copy_history && copy_history[0]
      ? copy_history[0].text
      : '';
  return {
    id:id,
    text:my_text,
    url:'http://vk.com/' + baseUrl + '?w=wall' + owner_id + '_' + id,
  };
};

export class VKScreen extends React.Component {
  state = { news: [], };

  async componentDidMount() {
    const { screenProps } = this.props;
    const { id, companies } = screenProps;
    const company = companies.find((el) => el.id === id);
    const vkUrl = company.urls.find(({type}) => type === 'vk');
    if (!vkUrl) { return; }
    try {
      const addr = vkUrl.raw_id
        ? 'owner_id=-' + vkUrl.url.substring(4)
        : 'domain=' + vkUrl.url;
      let response = await fetch('https://api.vk.com/method/wall.get?' + addr +
        '&count=10&filter=owner' +
        '&access_token=b64c0665b64c0665b64c0665fab610c3f9bb64cb64c0665ef0a93d489965de7e6196888&v=5.65');
      let responseJson = await response.json();
      this.setState({ news: responseJson.response.items
                              .map((item)=>get_item_data({baseUrl:vkUrl.url, ...item}))
                              .filter(({text})=>text) });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <BasicScreen>
        <ScrollView style={{flex: 1}}>
          { this.state.news.map(el => <NewsElement key={el.id} {...el}/>) }
        </ScrollView>
      </BasicScreen>
    );
  }
}

VKScreen.navigationOptions = {
  tabBarLabel: 'Новости',
};
