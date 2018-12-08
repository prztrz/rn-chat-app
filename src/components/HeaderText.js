// @flow strict

import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  children: string
};

export default ({ children }: Props) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333'
  }
});
