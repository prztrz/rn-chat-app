// @flow strict-local

import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default () => <View style={styles.line} />;

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#d7d7db'
  }
});
