import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import logo from '../icons/logo.png';
import tuiSong from '../icons/tuisong.png';
import Constant from './Constant';

export default class TabBarComponent extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Image style={{marginLeft: 10}} source={logo} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            this.props.navigation.navigation.navigate('ListView', {
              url: Constant.PUSH_MSG,
            })
          }>
          <Image style={{marginRight: 10}} source={tuiSong} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#1a7fcb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
