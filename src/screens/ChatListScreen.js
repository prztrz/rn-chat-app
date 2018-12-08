// @flow strict

import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Item from '../components/ChatListItem';
import { getChats, chats } from '../services/api';

type State = {
  data: ?typeof chats,
  isLoading: boolean
};
class ChatListScreen extends React.Component<{}, State> {
  state = { data: null, isLoading: false };

  async componentDidMount() {
    let data;
    await this.setState({ isLoading: true });

    try {
      data = await getChats();
      this.setState({ data });
    } catch (err) {
      console.log(err);
    }

    this.setState({ isLoading: false });
  }

  __renderItem = ({ item }: { item: $ElementType<typeof chats, 0> }) => (
    <Item
      avatar={item.avatar}
      title={item.title}
      description={item.description}
    />
  );

  render() {
    const { isLoading, data } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loader}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={this.__renderItem}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  loader: {
    alignItems: 'center'
  }
});

export default ChatListScreen;
