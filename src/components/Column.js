// @flow strict

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type justifyContent =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type Props = {|
  grow?: number,
  alignItems?: 'start' | 'center' | 'end',
  justifyContent?: justifyContent,
  children: React.Node
|};

export default ({ children, grow, alignItems, justifyContent }: Props) => (
  <View
    style={[
      styles.basic,
      grow && styles[`grow-${grow}`],
      alignItems && styles[`align-${alignItems}`],
      justifyContent && styles[`justify-${justifyContent}`]
    ]}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  basic: {
    flex: 1
  },
  'grow-1': {
    flex: 1
  },
  'grow-2': {
    flex: 2
  },
  'grow-3': {
    flex: 3
  },
  'grow-4': {
    flex: 4
  },
  grow5: {
    flex: 5
  },
  'align-start': {
    alignItems: 'flex-start'
  },
  'align-center': {
    alignItems: 'center'
  },
  'align-end': {
    alignItems: 'flex-end'
  },
  'justify-start': {
    justifyContent: 'flex-start'
  },
  'justify-center': {
    justifyContent: 'center'
  },
  'justify-end': {
    justifyContent: 'flex-end'
  },
  'justify-space-between': {
    justifyContent: 'space-between'
  },
  'justify-space-around': {
    justifyContent: 'space-around'
  },
  'justify-space-evenly': {
    justifyContent: 'space-evenly'
  }
});
