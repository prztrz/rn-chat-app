// @flow

import React, { Component } from 'react';
import { Platform, Text, SafeAreaView, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ChatListScreen from './src/screens/ChatListScreen';
import ChatViewScreen from './src/screens/ChatViewScreen';

const AppNavigator = createStackNavigator(
  {
    ChatList: {
      screen: ChatListScreen
    },
    ChatView: {
      screen: ChatViewScreen
    }
  },
  {
    initialRouteName: 'ChatList',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#006854'
      },
      headerTintColor: '#fff'
    }
  }
);

export default createAppContainer(AppNavigator);
