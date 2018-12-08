// @flow

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import ChatListScreen from './src/screens/ChatListScreen';
import ChatViewScreen from './src/screens/ChatViewScreen';
import Toggle from './src/components/Toggle';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Toggle>
          {({ isActive, toggle }) => (
            <React.Fragment>
              {isActive ? <ChatViewScreen /> : <ChatListScreen />}
              <Button title="Switch screen" onPress={toggle} />
            </React.Fragment>
          )}
        </Toggle>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
