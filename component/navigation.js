import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import createBottomTabNavigator from 'react-navigation-tabs/src/navigators/createBottomTabNavigator';
import DetailsScreen from './DetailPage';
import TabViews from './TabView';
import xw from '../icons/menu_xinwen.png';
import xwh from '../icons/menu_xinwen_h.png';
import ls from '../icons/menu_lingshi.png';
import lsh from '../icons/menu_lingshi_h.png';
import zl from '../icons/menu_ziliao.png';
import zlh from '../icons/menu_ziliao_h.png';
import fw from '../icons/menu_fuwu.png';
import fwh from '../icons/menu_fuwu_h.png';
import wb from '../icons/menu_weibo.png';
import wbh from '../icons/menu_weibo_h.png';
import WebViewPage from './WebViewPage';
import ListViewPage from './ListViewPage';
import Constant from './Constant';

const HomeStack = createStackNavigator({
  Home: {
    screen: TabViews,
    params: {url: Constant.XW},
  },
  ListView: ListViewPage,
  Details: DetailsScreen,
});

const LingShiStack = createStackNavigator({
  Home: {
    screen: TabViews,
    params: {url: Constant.LSFW},
  },
  ListView: ListViewPage,
  Details: DetailsScreen,
});

const ZiLiaoStack = createStackNavigator({
  Home: {
    screen: TabViews,
    params: {url: Constant.ZL},
  },
  ListView: ListViewPage,
  Details: DetailsScreen,
});

const FuWuStack = createStackNavigator({
  Home: {
    screen: TabViews,
    params: {url: Constant.XWFW},
  },
  ListView: ListViewPage,
  Details: DetailsScreen,
});

const XMTStack = createStackNavigator({
  XinMeiTi: WebViewPage,
  ListView: ListViewPage,
});

const TabNavigator = createBottomTabNavigator(
  {
    News: {
      screen: HomeStack,
      navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '首页',
        showLabel: false,
        tabBarIcon: ({focused}) => <Image source={focused ? xwh : xw} />,
      },
    },
    LingShi: {
      screen: LingShiStack,
      navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '领事',
        showLabel: false,
        tabBarIcon: ({focused}) => <Image source={focused ? lsh : ls} />,
      },
    },
    ZiLiao: {
      screen: ZiLiaoStack,
      navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '资料',
        showLabel: false,
        tabBarIcon: ({focused}) => <Image source={focused ? zlh : zl} />,
      },
    },
    FuWu: {
      screen: FuWuStack,
      navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '服务',
        showLabel: false,
        tabBarIcon: ({focused}) => <Image source={focused ? fwh : fw} />,
      },
    },
    XinMeiTi: {
      screen: XMTStack,
      navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '新媒体',
        showLabel: false,
        tabBarIcon: ({focused}) => <Image source={focused ? wbh : wb} />,
      },
    },
  },
  {
    initialRouteName: 'News',
    tabBarOptions: {
      activeTintColor: '#1a7fcb',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'white',
      },
    },
  },
);

export default createAppContainer(TabNavigator);
