// @flow strict

import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Column from './Column';

type Props = {|
  incoming?: boolean,
  children?: string
|};
export default ({ incoming, children }: Props) => (
  <View style={styles.container}>
    <Column alignItems={incoming ? 'start' : 'end'}>
      <View style={[styles.msg, incoming && styles.incoming]}>
        <Text>{children}</Text>
      </View>
    </Column>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  msg: {
    backgroundColor: '#fff',
    padding: 10,
    width: '80%',
    borderColor: '#b0aeac',
    borderWidth: 1,
    borderRadius: 5
  },
  incoming: {
    backgroundColor: '#d9ffc1'
  }
});
