import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const {width} = Dimensions.get('window');

export default class SwiperItem extends React.Component {
  onItemClick = value => {
    this.props.navigation.navigate('Details', {
      item: value,
    });
  };

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          this.onItemClick(this.props.itemValue);
        }}>
        <View>
          <Image
            style={{width, height: (width * 9) / 16}}
            source={{uri: this.props.itemValue.cimgs[0]}}
          />
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
            {this.props.itemValue.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    width,
    color: 'white',
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    position: 'absolute',
    bottom: 0,
  },
});
