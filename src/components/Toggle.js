// @flow strict

import * as React from 'react';
import { Text, View } from 'react-native';

type Data = {
  isActive: boolean,
  toggle: () => void
};

type Props = {
  children: Data => React.Node
};

type State = {
  isActive: boolean
};

export default class Toggle extends React.Component<Props, State> {
  state = {
    isActive: false
  };

  toggle = () => this.setState(({ isActive }) => ({ isActive: !isActive }));

  render() {
    const { isActive } = this.state;
    return this.props.children({ isActive, toggle: this.toggle });
  }
}
