import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Filter from './Filter';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  onItemClick() {
    this.props.item.documents
      ? this.props.navigation.push('ListView', {
          item: this.props.item,
        })
      : this.props.navigation.navigate('Details', {
          item: this.props.item,
        });
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.onItemClick();
          }}>
          <View style={styles.item}>
            <View style={styles.left}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                {this.props.item.title != null
                  ? this.props.item.title
                  : this.props.item.cname}
              </Text>
              <Text style={styles.date}>
                {this.props.item.updatedate != null
                  ? this.props.item.updatedate
                  : this.props.item.lmt}
              </Text>
            </View>
            {Filter.isNotEmpty(this.props.item.cimgs) &&
            Filter.isNotEmpty(this.props.item.cimgs[0]) ? (
              <Image
                source={{uri: this.props.item.cimgs[0]}}
                style={styles.image}
              />
            ) : null}
          </View>
        </TouchableOpacity>
        <View
          style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    padding: 5,
  },
  left: {
    flex: 1,
    height: 80,
    marginRight: 5,
  },
  title: {
    fontSize: 14,
    fontStyle: 'normal',
  },
  date: {
    fontSize: 14,
    position: 'absolute',
    bottom: 0,
  },
  image: {
    width: 80,
    height: 80,
  },
});
