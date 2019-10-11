import React from 'react';
import {Text, View, Button} from 'react-native';

export default class ProfoleScreen extends React.Component {
  static navigationOptions = {
    title: 'Profole',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profole Screen</Text>
      </View>
    );
  }
}
