import React from 'react';
import {View} from 'react-native';
import ListViewPage from './ListViewPage';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import TabBarComponent from './TabBarComponent';

export default class TabView extends React.Component {
  static navigationOptions = navigation => {
    return {
      header: <TabBarComponent navigation={navigation} />,
    };
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.url = this.navigation.getParam('url');
  }

  componentDidMount() {
    this.fetchData(this.url);
  }

  state = {
    gd: [],
  };

  fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          gd: this.state.gd.concat(responseJson.gd),
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const tabs = this.state.gd.map(value => (
      <View tabLabel={value.cname}>
        <ListViewPage url={value.documents} navigation={this.navigation} />
      </View>
    ));

    return (
      <ScrollableTabView
        tabBarActiveTextColor="#1a7fcb"
        tabBarInactiveTextColor="black"
        tabBarUnderlineStyle={{backgroundColor: '#1a7fcb', height: 2}}
        tabBarTextStyle={{fontSize: 14}}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}>
        {tabs}
      </ScrollableTabView>
    );
  }
}
