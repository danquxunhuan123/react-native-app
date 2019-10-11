import React, {Component} from 'react';
import {
  FlatList,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import ListItem from './ListItem';
import Swiper from 'react-native-swiper';
import SwiperItem from './SwiperItem';
import Filter from './Filter';
const {width} = Dimensions.get('window');

export default class ListViewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top_datas: [],
      list_datas: [],
      refreshing: true,
    };

    this.url = '';
    if (!Filter.isEmpty(this.props.url)) this.url = this.props.url;
    else if (!Filter.isEmpty(this.props.navigation.getParam('item', null))) {
      this.url = this.props.navigation.getParam('item', null).documents;
    } else {
      this.url = this.props.navigation.getParam('url', '');
    }

    this.endWithDoc = this.url.lastIndexOf('documents.json') !== -1;
    this.pageCount = 0;
    this.onEndReachedCalledDuringMomentum = true;
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(): void {
    this.fetchData(this.url);
  }

  fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        if (this.endWithDoc) {
          this.setState({
            refreshing: false,
            top_datas:
              this.pageCount === 0
                ? (this.state.top_datas = responseJson.top_datas)
                : this.state.top_datas,
            list_datas:
              this.pageCount === 0
                ? (this.state.list_datas = responseJson.list_datas)
                : this.state.list_datas.concat(responseJson.list_datas),
          });
        } else {
          this.setState({
            refreshing: false,
            list_datas:
              this.pageCount === 0
                ? (this.state.gd = responseJson.gd ? responseJson.gd : [])
                : this.state.gd.concat(responseJson.gd ? responseJson.gd : []),
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <FlatList
        data={this.state.list_datas}
        renderItem={({item}) => {
          return <ListItem item={item} navigation={this.props.navigation} />;
        }}
        ListHeaderComponent={() => {
          if (this.state.top_datas.length !== 0)
            return (
              <View style={styles.swiperBg}>
                <Swiper
                  paginationStyle={{
                    bottom: 10,
                    left: null,
                    right: 10,
                  }}>
                  {this.renderSwiper()}
                </Swiper>
              </View>
            );

          return null;
        }}
        onMomentumScrollBegin={() => {
          this.onEndReachedCalledDuringMomentum = false;
        }}
        refreshing={this.state.refreshing} //
        onRefresh={() => {
          this.pageCount = 0;
          this.fetchData(this.url);
        }}
        onEndReachedThreshold={0.5}
        onEndReached={({distanceFromEnd}) => {
          if (!this.onEndReachedCalledDuringMomentum) {
            this.loadMore();
            this.onEndReachedCalledDuringMomentum = true;
          }
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }

  loadMore() {
    let url = this.url;
    if (url.lastIndexOf('documents.json') !== -1) {
      this.pageCount++;
      url = url.replace('documents', 'documents_' + this.pageCount);
      this.fetchData(url);
    }
  }

  renderSwiper() {
    return this.state.top_datas.map(value => (
      <SwiperItem navigation={this.props.navigation} itemValue={value} />
    ));
  }
}

const styles = StyleSheet.create({
  swiperBg: {
    width,
    height: (width * 9) / 16,
  },
});
