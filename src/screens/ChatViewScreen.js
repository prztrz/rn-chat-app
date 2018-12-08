// @flow strict

import * as React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';
import Message from '../components/Message';
import { getMessagesById, mockMessages } from '../services/api';

type State = {
  data: ?typeof mockMessages,
  isLoading: boolean
};
class ChatViewScreen extends React.Component<{}, State> {
  state = {
    isLoading: false,
    data: null
  };

  async componentDidMount() {
    let data;
    await this.setState({ isLoading: true });

    try {
      data = await getMessagesById();
      this.setState({ data });
    } catch (err) {
      console.log('err', err);
    }

    this.setState({ isLoading: false });
  }

  __renderItem = ({ item }: { item: $ElementType<typeof mockMessages, 0> }) => (
    <Message incoming={item.incoming}>{item.message}</Message>
  );

  render() {
    const { isLoading, data } = this.state;
    console.log({ data, isLoading });
    return (
      <ImageBackground
        source={require('../assets/imgs/background.png')}
        style={styles.background}
      >
        {isLoading ? (
          <View style={styles.loader}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <View style={styles.chatContainer}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={this.__renderItem}
            />
          </View>
        )}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    flex: 1
  },
  loader: {
    alignItems: 'center'
  },
  chatContainer: {
    paddingVertical: 20
  }
});
export default ChatViewScreen;
