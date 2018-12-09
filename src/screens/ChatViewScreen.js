// @flow strict

import * as React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native';
import type { NavigationScreenProps } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Message from '../components/Message';
import Compose from '../components/Compose';
import { getMessagesById, mockMessages, postMessage } from '../services/api';

type State = {
  data: ?typeof mockMessages,
  isLoading: boolean,
  msgText: string
};
class ChatViewScreen extends React.Component<NavigationScreenProps, State> {
  state = {
    isLoading: false,
    data: null,
    msgText: ''
  };

  keyboardVerticalOffset = Platform.OS === 'ios' ? 45 : 0;

  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: navigation.getParam('title', navigation.title),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={40} color="#fff" />
        </TouchableOpacity>
      )
    };
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

  setMsgText = (msgText: string) => this.setState({ msgText });

  render() {
    const { isLoading, data, msgText } = this.state;
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
          <KeyboardAvoidingView
            style={styles.background}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={this.keyboardVerticalOffset}
          >
            <View style={styles.chatContainer}>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={this.__renderItem}
              />
            </View>
            <Compose
              text={msgText}
              onChangeText={this.setMsgText}
              onSubmit={() => {
                postMessage(msgText);
                this.setState({ msgText: '' });
                Keyboard.dismiss();
              }}
            />
          </KeyboardAvoidingView>
        )}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between'
  },
  loader: {
    alignItems: 'center'
  },
  chatContainer: {
    paddingVertical: 20
  }
});
export default ChatViewScreen;
