import {BackHandler, Platform} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import Filter from './Filter';

export default class DetailsScreen extends React.Component {
  // static navigationOptions = ({navigation}) => {
  //   return {
  //     title: 'Details',
  // headerTitle: <LogoTitle />,
  // headerRight: <Button onPress={() => alert()} title="+1" color="#000" />,
  //   };
  // };

  constructor(props) {
    super(props);

    const {navigation} = this.props;
    this.item = navigation.getParam('item', null);
    this.state = {
      body: '',
      title: '',
      source: '',
      updatedate: '',
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(): void {
    if (Platform.OS === 'android') {
      this.backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        this.handleBackPress,
      );
    }

    this.fetchData();
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') this.backHandler.remove();
  }

  handleBackPress = () => {
    if (this.canGoBack) {
      this.refs['webView'].goBack();
      return true;
    } else return false;
  };

  fetchData() {
    console.log('url: ', this.item.url);
    fetch(this.item.url)
      .then(response => {
        console.log('response: ', response);
        return response.json();
      })
      .then(responseJson => {
        console.log('responseJson: ', responseJson);
        this.setState({
          title: responseJson.datas.title,
          source: responseJson.datas.source,
          updatedate: responseJson.datas.updatedate,
          body: responseJson.datas.body,
        });
      })
      .catch(error => {
        // alert(error.message);
        console.error(error);
        alert(error.message);
        console.error(error.messageData);
      });
  }

  render() {
    if (Filter.isEmpty(this.state.body)) return null;

    const html = `
      <html>
      <head></head>
      <body>
      <div  style="color:#333;font-size:20px;" }>${this.state.title}
      </div>
      <div>
<!--        <h2>${this.state.source}</h2>-->
        <h2 style="color:#999;font-size:14px;">${this.state.updatedate}</h2>
      </div>
      <div style="color:#333">${this.state.body}</div>
      
      <script>
      const imgTags = document.getElementsByTagName("IMG");
        let j = 0;
        for (j; j < imgTags.length; j ++){
          imgTags[j].setAttribute("width","100%");
        }
        
        const pTags = document.getElementsByTagName("P");
        let i = 0;
        for (i; i < pTags.length; i ++){
          pTags[i].setAttribute("style","font-size: 16px; font-family: arial");
        }
      </script>
      </body>
      </html>
    `;

    return (
      <WebView
        ref="webView"
        scalesPageToFit={false}
        javaScriptEnabled={true}
        allowFileAccess={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        source={{html}}
        // onShouldStartLoadWithRequest={request => {
        //   console.log('request', request);
        //   // return request.url.startsWith('https://facebook.github.io/react-native');
        // }}
        onNavigationStateChange={navState => {
          this.canGoBack = navState.canGoBack;
        }}
      />
    );
  }
}
