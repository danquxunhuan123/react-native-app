import {Platform} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import Constant from './Constant';
import TabBarComponent from './TabBarComponent';

export default class WebViewPage extends React.Component {
  static navigationOptions = navigation => {
    return {
      header: <TabBarComponent navigation={navigation} />,
    };
  };

  render() {
    return <WebView source={{uri: Constant.XMT}} />;
  }
}
