// @flow strict-local

import * as React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

import Column from './Column';

type Props = {|
  text: string,
  onChangeText: string => void,
  onSubmit: () => void
|};

export default ({ text, onChangeText, onSubmit }: Props) => (
  <View style={styles.container}>
    <Column grow={4}>
      <TextInput
        value={text}
        onChangeText={onChangeText}
        style={styles.input}
        underlineColorAndroid="#098"
      />
    </Column>
    <Column alignItems="end">
      <Button title="Send" onPress={onSubmit} />
    </Column>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#d7d7db',
    borderWidth: 1,
    marginBottom: 40,
    padding: 10
  }
});
