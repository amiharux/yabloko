import React from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  IconSearch
} from '../styles/Icons'

import {
  CLR_SEARCH_BUTTON,
  CLR_SEARCH_BACKGROUND,
  CLR_SEARCH_TEXT,
} from '../styles/Colors'

import {
  MENU_ICON_SIZE,
  NORMAL_PADDING_SIZE,
} from '../styles/Constants'

export class SearchBox extends React.Component {
  state = {
    query: '',
    showInput: false,
  };

  doSearch = () => {
    const { query } = this.state;
    const { navigation } = this.props;
    if (query) {
      navigation.dispatch({type:'JUMP_TO_SEARCH_RESULT', payload:{query:query}})
    }
  };

  render() {
    const inputWidth = Dimensions.get('window').width - MENU_ICON_SIZE - 3 * NORMAL_PADDING_SIZE;

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
        <View style={{flexDirection: 'row', }}>
          {this.state.showInput ? (
            <View style={{justifyContent:'center'}}>
              <TextInput
                style={{width: inputWidth, backgroundColor: CLR_SEARCH_BACKGROUND, borderRadius: 5, margin: NORMAL_PADDING_SIZE, paddingLeft: NORMAL_PADDING_SIZE}}
                onChangeText={(text)=>this.setState({query:text})}
                onSubmitEditing={this.doSearch}
                returnKeyType={'search'}
                underlineColorAndroid={CLR_SEARCH_BUTTON}
              />
            </View>
          ) : null}
          <TouchableOpacity style={{justifyContent:'center',}} onPress={()=>this.setState({showInput: !this.state.showInput})}>
            <IconSearch color={CLR_SEARCH_BUTTON}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
