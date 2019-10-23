import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  Dimensions,
} from 'react-native';
import default_pic from '../icons/default_pic.jpg';
export default class GridViewPage extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        uri: 'http://pic1.win4000.com/wallpaper/2017-12-05/5a2646040a1fc.jpg',
        type: 1,
      },
      {
        uri: {
          uri1:
            'http://img3.duitang.com/uploads/item/201507/03/20150703154600_2f8rj.thumb.700_0.jpeg',
          uri2:
            'http://b-ssl.duitang.com/uploads/item/201902/06/20190206022659_ytAeR.thumb.700_0.jpeg',
          uri3:
            'http://b-ssl.duitang.com/uploads/item/201901/15/20190115181136_ZLMrV.thumb.700_0.jpeg',
        },
        type: 2,
      },
      {
        uri: 'http://pic1.win4000.com/wallpaper/2018-03-17/5aacb7852278b.jpg',
        type: 1,
      },
      {
        uri: {
          uri1:
            'http://a-ssl.duitang.com/uploads/item/201505/29/20150529111115_w4Hhd.png',
          uri2: 'http://img.duoziwang.com/2018/06/2017123108127106.jpg',
          uri3:
            'http://www.qqtouxiang.com/d/file/keai/20170223/9f72bca7bee81c465049bbe4362bd677.jpg',
        },
        type: 2,
      },
      {
        uri: 'http://www.79n.cn/uploads/allimg/121120/1-1211201T040.jpg',
        type: 1,
      },
      {
        uri: {
          uri1:
            'http://img1.2345.com/duoteimg/qqTxImg/2013/04/22/136676893410.jpg',
          uri2:
            'http://www.ghost64.com/qqtupian/qqTxImg/7/fd8ff92d54f8ee21051c0ff5a2c7b584.jpg',
          uri3:
            'http://b-ssl.duitang.com/uploads/item/201506/08/20150608155956_NFseJ.jpeg',
        },
        type: 2,
      },
      {
        uri:
          'http://img.bbs.duba.net/forum/201112/01/140904xr8h00ssn0g0zgza.jpg',
        type: 1,
      },
      {
        uri: {
          uri1:
            'http://tx.haiqq.com/uploads/allimg/c170118/14TB95V2E10-313621.jpg',
          uri2:
            'http://www.ghost64.com/qqtupian/qqTxImg/8/ce4033df55ccebc2f1bbfd2149ca217a.jpg',
          uri3:
            'http://tx.haiqq.com/uploads/allimg/c170106/14S64419253920-5B610.jpg',
        },
        type: 2,
      },
      {
        uri: 'http://pic1.win4000.com/wallpaper/1/57a2fa5f8da86.jpg',
        type: 1,
      },
    ];
  }

  closeModal = () => {
    alert('close!!!');
  };

  onPress = () => (
    <Modal
      animationType="slide"
      visible={true}
      onRequestClose={this.closeModal}>
      <Image
        resizeMode={'center'}
        style={{
          width: 300,
          height: 100,
        }}
        source={default_pic}
      />
    </Modal>
  );

  render() {
    return (
      <FlatList
        data={this.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          switch (item.type) {
            case 1:
              return (
                <TouchableOpacity onPress={this.onPress}>
                  <Image
                    defaultSource={require('../icons/default_pic.jpg')}
                    style={{
                      width: Dimensions.get('window').width,
                      height: (Dimensions.get('window').width * 12) / 19,
                    }}
                    source={{
                      uri: item.uri,
                    }}
                  />
                </TouchableOpacity>
              );
            case 2:
              return (
                <View style={{flexDirection: 'row'}}>
                  <Image
                    defaultSource={require('../icons/default_pic.jpg')}
                    style={styles.image}
                    source={{
                      uri: item.uri.uri1,
                    }}
                  />
                  <Image
                    defaultSource={require('../icons/default_pic.jpg')}
                    style={styles.image}
                    source={{
                      uri: item.uri.uri2,
                    }}
                  />
                  <Image
                    defaultSource={require('../icons/default_pic.jpg')}
                    style={styles.image}
                    source={{
                      uri: item.uri.uri3,
                    }}
                  />
                </View>
              );
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
  },
  text: {
    width: Dimensions.get('window').width / 3,
    lineHeight: 50,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'green',
  },
});
