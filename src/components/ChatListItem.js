// @flow strict

import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Column from './Column';

type Props = {|
  avatar: string,
  title: string,
  description: string
|};
export default ({ avatar, title, description }: Props) => (
  <View style={styles.container}>
    <Column>
      <Image source={{ uri: avatar }} style={styles.avatar} />
    </Column>
    <Column grow={3} justifyContent="space-between">
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </Column>
    <Column alignItems="end" justifyContent="space-between">
      <Text>Yesterday</Text>
      <Icon name="chevron-right" size={20} style={styles.chevron} />
    </Column>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50
  },
  title: {
    fontWeight: 'bold'
  },
  chevron: {
    color: '#7d7d7d',
    fontWeight: 'normal'
  }
});
