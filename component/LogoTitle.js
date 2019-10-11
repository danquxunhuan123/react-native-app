import React from 'react';
import {Image} from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={{
          uri:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568290067985&di=0a3a996abd24481814ae83f7abfcfe26&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F388274cb26743269d81fd07b5ee1522f717793272094-LWNjBJ_fw658',
        }}
        style={{width: 30, height: 30}}
      />
    );
  }
}
