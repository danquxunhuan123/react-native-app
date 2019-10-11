import ViewPager from '@react-native-community/viewpager';
import React from 'react';
import ListViewPage from './ListViewPage';
import {Text, View, StyleSheet} from 'react-native';

export default class MyPager extends React.Component {
  render() {
    return (
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View key="1">
          <Text>First page</Text>
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
        <View key="3">
          <Text>Three page</Text>
        </View>
        <View key="4">
          <Text>Four page</Text>
        </View>
        <View key="5">
          <Text>Five page</Text>
        </View>
        <View key="6">
          <Text>Six page</Text>
        </View>
      </ViewPager>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'red',
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  viewPager: {
    flex: 1,
  },
});
